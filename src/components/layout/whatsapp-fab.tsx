"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/utils";

export default function WhatsappFab({ label }: { label: string }) {
  return (
    <motion.a
      href={WHATSAPP_LINK("Hi Nordic BnB — I'd like to talk about my property.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(0,0,0,0.25)] sm:bottom-7 sm:right-7"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12.02 2C6.5 2 2 6.5 2 12.02c0 1.84.5 3.6 1.43 5.15L2 22l4.98-1.4a9.96 9.96 0 0 0 5.04 1.37h.01c5.52 0 10.02-4.5 10.02-10.02C21.99 6.5 17.53 2 12.02 2Zm0 18.3a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-2.96.83.79-2.89-.2-.3a8.24 8.24 0 0 1-1.27-4.4c0-4.56 3.71-8.27 8.27-8.27 4.56 0 8.27 3.71 8.27 8.27 0 4.56-3.71 8.09-8.41 8.09Zm4.53-6.2c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42-.14 0-.31-.02-.47-.02-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.2 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z"
          fill="white"
        />
      </svg>
    </motion.a>
  );
}
