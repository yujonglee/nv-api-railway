// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

import main from "./seeder";
import yargs from "yargs";

const { count, concurrency, maxDepth, relCount, saveData, showTrace } = yargs
  .scriptName("seeder")
  .usage("$0 [args]")
  .options({
    count: {
      alias: "c",
      describe: "number of records to create per root '@seed' annotation",
      type: "number",
      default: 100,
    },
    maxDepth: {
      alias: "d",
      describe: "max relation depth to process",
      type: "number",
      default: 10,
    },
    concurrency: {
      alias: "p",
      describe: "number of concurrent objects to created",
      type: "number",
      default: 10,
    },
    relCount: {
      alias: "r",
      describe: "number of records to create per nested relation",
      type: "number",
      default: 20,
    },
    saveData: {
      alias: "s",
      describe: "save data to file",
      type: "boolean",
      default: false,
    },
    showTrace: {
      alias: "t",
      describe: "write seed tree with object counts (debugging tool)",
      type: "boolean",
      default: false,
    },
  })
  .help().argv;

main({ count, maxDepth, concurrency, relCount, saveData, showTrace }).catch(
  (e) => {
    console.error(e);
    process.exit(1);
  }
);
