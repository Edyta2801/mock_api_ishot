import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';

export default [
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2021,
            globals: {
                console: 'readonly',
                process: 'readonly',
                __dirname: 'readonly',
                module: 'readonly',
                require: 'readonly',
                exports: 'readonly',
            },
        },
        plugins: {
            prettier,
        },
        rules: {
            'constructor-super': 'off',
            'no-unused-vars': 'warn',
            'no-console': 'off',
            'prettier/prettier': 'error',
        },
    },
];
