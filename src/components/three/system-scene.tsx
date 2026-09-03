"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

const PILLAR_COLORS = [
  "#e0532e", // Position — coral
  "#c96a3e", // Price
  "#b47c4f", // Distribute
  "#8a8072", // Host — stone
  "#4d4034", // Care
  "#e0532e", // Improve — back to coral, full circle
];

function Gem({ progressRef }: { progressRef: React.MutableRefObject<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<React.ComponentRef<typeof MeshDistortMaterial>>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const color = useMemo(() => new THREE.Color(), []);

  useFrame((state, delta) => {
    const progress = progressRef.current;
    const stageF = progress * (PILLAR_COLORS.length - 1);
    const stage = Math.min(PILLAR_COLORS.length - 2, Math.floor(stageF));
    const localT = stageF - stage;

    const cA = new THREE.Color(PILLAR_COLORS[stage]);
    const cB = new THREE.Color(PILLAR_COLORS[stage + 1]);
    color.copy(cA).lerp(cB, localT);

    if (materialRef.current) {
      materialRef.current.color.copy(color);
      materialRef.current.distort = 0.32 + Math.sin(progress * Math.PI) * 0.28;
    }

    if (groupRef.current) {
      pointer.current.x += (state.pointer.x * 0.35 - pointer.current.x) * 0.04;
      pointer.current.y += (state.pointer.y * 0.35 - pointer.current.y) * 0.04;
      groupRef.current.rotation.y = progress * Math.PI * 2.2 + pointer.current.x;
      groupRef.current.rotation.x = -0.15 + pointer.current.y * 0.3;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
    }

    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.05;
    }

    if (wireRef.current) {
      const wireOpacity = 0.55 - progress * 0.45;
      const mat = wireRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = Math.max(0.06, wireOpacity);
      wireRef.current.scale.setScalar(1.32 + progress * 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.35, 6]} />
          <MeshDistortMaterial
            ref={materialRef}
            roughness={0.22}
            metalness={0.15}
            distort={0.35}
            speed={1.6}
          />
        </mesh>
      </Float>
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshBasicMaterial color="#f6f1e8" wireframe transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

export default function SystemScene({
  progressRef,
}: {
  progressRef: React.MutableRefObject<number>;
}) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 4.6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} />
      <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#f2a98a" />
      <Gem progressRef={progressRef} />
    </Canvas>
  );
}
