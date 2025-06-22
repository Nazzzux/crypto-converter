import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
      import: importPlugin,
    },
  },
  {
    ignores: [
      'dist',
      'node_modules',
      'coverage',
      'eslint.config.js',
      'vite.config.ts',
      'setupTests.ts',
      'auth-config.ts',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.app.json', 'tsconfig.node.json', 'auth-config.ts'],
        tsconfigRootDir: './',
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
        },
      ],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prefer-const': 'error',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
      'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'max-len': ['warn', { code: 120, ignoreStrings: false }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'warn',
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/no-unused-vars': 1,
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^I[A-Z]',
            match: true,
          },
        },
      ],
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      '@typescript-eslint/no-explicit-any': 'off', // TODO: remove this
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
      'import/order': [
        'error',
        {
          groups: [['external', 'builtin'], 'internal', ['sibling', 'parent', 'index'], 'unknown'],
          pathGroups: [
            {
              pattern: 'react*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'pages/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'assets/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'hooks/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'helpers/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: 'interfaces/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'constants/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'components/**',
              group: 'internal',
            },
            {
              pattern: './*.module.scss',
              group: 'unknown',
              position: 'after',
            },
            {
              pattern: 'styles/**',
              group: 'unknown',
              position: 'after',
            },
            {
              pattern: './**',
              group: 'index',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],
    },
  },
);
