import { es2020 } from 'eslint-plugin-es';
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
      sourceType: 'module',
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      es: es2020,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    globals: { ...globals.browser },
    rules: {
      'react/jsx-no-target-blank': 'off',
      ...es2020.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
