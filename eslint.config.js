import tsEslint from 'typescript-eslint'
import js from '@eslint/js'
import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier'

const config = [
  { ignores: ['node_modules', 'dist', 'eslint.config.js', '.prettierrc.js'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsEslint.parser,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020
      },
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    extends: [...tsEslint.configs.recommended, ...tsEslint.configs.recommendedTypeCheckedOnly],
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin
    },

    rules: {
      ...js.configs.recommended.rules,

      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],

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
