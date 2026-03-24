#!/usr/bin/env node

import { spawn } from "node:child_process";
import { access, readdir } from "node:fs/promises";
import { join, resolve } from "node:path";
import process from "node:process";

const USER_ARGUMENTS_START_INDEX = 2;

async function fileExists(filePath) {
    try {
        await access(filePath);

        return true;
    } catch {
        return false;
    }
}

async function checkCwdEslint() {
    const cwdNodeModulesEslint = resolve(process.cwd(), "node_modules/eslint/bin/eslint.js");

    if (await fileExists(cwdNodeModulesEslint)) {
        return cwdNodeModulesEslint;
    }

    return null;
}

async function checkLocalEslint() {
    // eslint-disable-next-line id-denylist
    const packageDirectory = import.meta.dirname;
    const localNodeModulesEslint = resolve(packageDirectory, "node_modules/eslint/bin/eslint.js");

    if (await fileExists(localNodeModulesEslint)) {
        return localNodeModulesEslint;
    }

    return null;
}

async function checkPnpmEslint() {
    const pnpmStoreDirectory = resolve(process.cwd(), "node_modules/.store");

    if (!await fileExists(pnpmStoreDirectory)) {
        return null;
    }

    // eslint-disable-next-line security/detect-non-literal-fs-filename
    const eslintStorePaths = await readdir(pnpmStoreDirectory);

    for (const eslintStorePath of eslintStorePaths) {
        if (!eslintStorePath.startsWith("eslint-")) continue;

        const eslintCliPath = join(pnpmStoreDirectory, eslintStorePath, "package/bin/eslint.js");

        if (await fileExists(eslintCliPath)) {
            return eslintCliPath;
        }
    }

    return null;
}

async function getEslintCliPath() {
    const cwd = await checkCwdEslint();

    if (cwd) return cwd;

    const local = await checkLocalEslint();

    if (local) return local;

    const pnpm = await checkPnpmEslint();

    if (pnpm) return pnpm;

    process.stderr.write("Could not find ESLint binary. Install dependencies or check Yarn linker configuration.\n");
    process.exit(1);
}

const eslintCliPath = await getEslintCliPath();
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
