import type { Linter } from 'eslint';

/**
 * ODG ESLint Configuration
 *
 * A comprehensive ESLint configuration for JavaScript, TypeScript, JSON, YAML, and other file types.
 * This configuration includes support for:
 * - JavaScript/TypeScript linting
 * - JSON/JSONC configuration files
 * - YAML files (including GitHub Actions)
 * - PHP files with HTML markup
 * - Test files with Vitest globals
 * - Various file formats (INI, TOML, Markdown, etc.)
 *
 * @example
 * // Using this configuration in eslint.config.js
 * import config from '@odg/eslint-config';
 *
 * export default [
 *   ...config
 * ];
 */
declare const config: Linter.Config[];

export default config;