#!/usr/bin/env node

import { spawn } from "node:child_process";
import { resolve } from "node:path";
import process from "node:process";

const USER_ARGUMENTS_START_INDEX = 2;
const eslintCliPath = resolve(process.cwd(), "node_modules/eslint/bin/eslint.js");
const eslintArguments = process.argv.slice(USER_ARGUMENTS_START_INDEX);

const eslintProcess = spawn(process.execPath, [ eslintCliPath, ...eslintArguments ], {
    stdio: "inherit",
});

eslintProcess.on("error", (error) => {
    process.stderr.write(`${error.message}\n`);
    process.exit(1);
});

eslintProcess.on("close", (code) => {
    process.exit(code ?? 0);
});
