// module.exports = {
//     extends: [
//         require.resolve('@miro/fel-eslint')
//     ],
// };

module.exports = {
    extends: [
        require.resolve('eslint-config-airbnb'),
        'plugin:cypress/recommended',
        'plugin:flowtype/recommended',
        'plugin:import/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    env: {
        jest: true,
        'cypress/globals': true,
    },
    plugins: [
        'cypress',
        'flowtype',
        'import',
        'jsx-a11y',
        'prettier',
        'react',
        'react-hooks',
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: true,
                tabWidth: 4,
                trailingComma: 'all',
            },
        ],

        eqeqeq: 'error',
        'no-console': 'error',
        'import/first': 'error',
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },
    globals: {
        __webpack_require__: false,
    },
};
