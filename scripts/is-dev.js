// ======= DO NOT EDIT =======
// This file is auto-generated
// ---------------------------

/* istanbul ignore file */

const chalk = require("chalk");
const os = require("os");

function main() {
  if (!process.env.NODE_ENV?.match(/^dev.*/i)) {
    const setter = os.platform().match(/^win/i)
      ? "set NODE_ENV=dev"
      : "export NODE_ENV=dev";
    const message = [
      chalk.red(`ERROR: ${chalk.yellow(
      "Command can only be executed in development mode."
    )}`),
      chalk.yellow(`       Please ${chalk.cyan(setter)} & retry`),
      "",
    ].join("\n");
    console.error(message);
    process.exit(-1);
  }
}

main();
