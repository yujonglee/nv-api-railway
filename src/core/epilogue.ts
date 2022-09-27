// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

/* istanbul ignore file */
// this code was manually tested, across platforms.

import { cyan, italic } from "chalk";
import { platform } from "os";

/**
 * micro-dev logs each request/response to console.log, without an ability o
 * redirect it anywhere. This make it hard to keep any useful help text
 * in frame for a novice user. `epilogue` is an attempt to detect process termination
 * and log a message
 *
 * Because we invoke `micro-dev` as a subprocess, this message is then printed
 * multiple times. Epilogue includes a simple mechanism to prevent this
 *
 */
let printed = false;
export function epilogue() {
  const msg = [
    "",
    `${italic("Noun & Verb")} workflow:`,
    `  ${cyan("npm run generate")}`,
    ...(platform() === "win32"
      ? [`  ${cyan("set NODE_ENV=dev")} # protect production DB`]
      : [`  ${cyan("export NODE_ENV=dev")} # protect production DB`]),
    `  ${cyan("npm run migrate")}`,
    `  ${cyan("npm run test")}`,
    `  ${cyan("npm run dev")} # starts the dev server`,
    "",
    `For more, visit ${cyan("https://NounAndVerb.io/docs")}`,
    "",
    `To start a new API project:`,
    `  ${cyan("npm init noun-and-verb -- --help")}`,
    "",
  ].join("\n");

  const NODE_ENV = (process.env?.NODE_ENV ?? "production").toLowerCase();
  process.on("SIGINT", () => {
    if (!printed && NODE_ENV !== "production") {
      printed = true;
      console.error(msg);
    }
  });
}
