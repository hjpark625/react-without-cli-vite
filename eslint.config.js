import tsEslint from 'typescript-eslint'
import tsParser from '@typescript-eslint/parser'
import js from '@eslint/js'
import globals from 'globals'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier'

const config = [
  { ignores: ['node_modules', 'dist'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      prettier: prettierPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin
    },

    rules: {
      ...tsEslint.configs.recommendedTypeCheckedOnly.rules,

      ...js.configs.recommended.rules,

      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      ...reactPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',

      ...reactHooksPlugin.configs.recommended.rules,

      ...jsxA11yPlugin.configs.recommended.rules,

      ...prettierPlugin.configs.recommended.rules,
      'prettier/prettier': 'warn'
    },

    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]

export default tsEslint.config(...config)
