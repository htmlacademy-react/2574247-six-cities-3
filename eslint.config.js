import path from 'path';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,
  tseslint.configs.recommended,
  reactHooks.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: [
          path.resolve(process.cwd(), '2574247-six-cities-3/tsconfig.json'),
        ],
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      react: react,
    },
    rules: {
      'react-refresh/only-export-components': 'warn',
      '@typescript-eslint/unbound-method': 'off',
    },
  },
];
