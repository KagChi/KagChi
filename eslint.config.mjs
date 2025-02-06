import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import * as tseslint from 'typescript-eslint';

/** @type {import('typescript-eslint').Config} */
export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    plugins: {
      '@next/next': nextPlugin
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'error',
      '@next/next/no-sync-scripts': 'error'
    }
  },
  {
    ignores: ['node_modules/**', '.next/**', 'dist/**']
  },
  eslintConfigPrettier
];