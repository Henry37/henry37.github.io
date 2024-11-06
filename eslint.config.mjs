/* eslint-disable import/no-anonymous-default-export */
import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        files: ['src/**/*.ts', 'src/**/*.tsx'],
        plugins: {
            '@typescript-eslint': typescriptEslint,
        },
        languageOptions: {
            parser: tsParser,
        },
        rules: {
            quotes: ['error', 'single'],
            'eol-last': ['error', 'always'],
        },
    },
];