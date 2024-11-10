import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'import-newlines': importNewlines,
    },
    extends: ['prettier'],
    rules: {
      //  React-related rules
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // Vite-specific rules
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Custom rules
      'comma-dangle': [
        'error',
        {
          arrays: 'never',
          exports: 'never',
          functions: 'never',
          imports: 'never',
          objects: 'never',
          trailing: 'always',
        },
      ],
      'import-newlines/enforce': ['error', 2],
      'no-console': 'warn',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'object-curly-newline': [
        'error',
        {
          ExportDeclaration: { multiline: true, minProperties: 3 },
          ImportDeclaration: 'always',
          ObjectExpression: { minProperties: 2, multiline: true },
          ObjectPattern: { multiline: true },
        },
      ],
    },
  },
];
