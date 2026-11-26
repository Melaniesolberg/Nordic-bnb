/**
 * Runs one background-worker pass from the command line, with the same
 * rules as the Netlify function. Useful for testing and as a fallback where
 * Netlify Background Functions are not available.
 *
 *   node --env-file=.env.local --import tsx scripts/crm-worker.ts [all|send]
 *
 * Keys are read from the environment (.env.local is git-ignored).
 */
import { runWorker } from "@/lib/crm/worker/run";

const mode = process.argv[2] === "send" ? "send" : "all";
runWorker({ mode, trigger: "manual", deadline: Date.now() + 13.5 * 60 * 1000 })
  .then((r) => {
    console.log(JSON.stringify(r, null, 2));
    process.exit(0);
  })
  .catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exit(1);
  });
