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
        // ----- start legacy -----
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
        'import/no-extraneous-dependencies': 'off',
        'no-use-before-define': [
            'error',
            { functions: false, classes: false, variables: true },
        ],
        complexity: ['warn', 20],
        'max-len': ['warn', 120],
        'no-tabs': 'warn',
        'no-irregular-whitespace': 'warn',
        'object-shorthand': 'warn',
        'object-shorthand': 'warn',
        'prefer-arrow-callback': 'warn',
        'prefer-template': 'warn',
        'no-param-reassign': 'warn',
        'operator-assignment': 'warn',
        'no-useless-escape': 'warn',
        'prefer-rest-params': 'warn',
        'prefer-rest-params': 'warn',
        'prefer-spread': 'warn',
        'no-plusplus': 'off',
        'class-methods-use-this': 'off',
        curly: ['error', 'all'],
        'comma-dangle': 'off',
        'no-underscore-dangle': 'off',
        strict: 'off',
        'no-else-return': 'off',
        'vars-on-top': 'off',
        'guard-for-in': 'off',

        // REACT SPECIFIC RULES
        'react/jsx-filename-extension': 'off',
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/no-array-index-key': 0,
        'react/forbid-prop-types': 'warn',
        'react/jsx-boolean-value': 'off',
        'react/require-extension': 'off',
        // ----- end legacy -----
        'react/jsx-no-useless-fragment': 0,
        'react/prop-types': 'off',

        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/no-noniteractive-tabindex': 'off',
        'jsx-a11y/label-has-for': [
            2,
            {
                components: ['Label'],
                required: {
                    every: ['nesting', 'id'],
                },
                allowChildren: true,
            }
        ],

        'flowtype/boolean-style': [2, 'boolean'],
        'flowtype/define-flow-type': 1,
        'flowtype/generic-spacing': [2, 'never'],
        'flowtype/no-mixed': 2,
        'flowtype/no-primitive-constructor-types': 2,
        'flowtype/no-types-missing-file-annotation': 2,
        'flowtype/no-weak-types': 'off',
        'flowtype/no-unused-expressions': 2,
        'flowtype/object-type-delimiter': [2, 'comma'],
        'flowtype/require-parameter-type': 2,
        'flowtype/require-readonly-react-props': 0,
        'flowtype/require-valid-file-annotation': 2,
        'flowtype/semi': [2, 'always'],
        'flowtype/space-after-type-colon': [2, 'always'],
        'flowtype/space-before-generic-bracket': [2, 'never'],
        'flowtype/space-before-type-colon': [2, 'never'],
        'flowtype/union-intersection-spacing': [2, 'always'],
        'flowtype/use-flow-type': 1,
        'flowtype/valid-syntax': 1,

        'react-hooks/rules-of-hooks': 'error',

        'cypress/no-unnecessary-waiting': 'warn',
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
