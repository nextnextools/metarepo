/* eslint-disable import/no-commonjs */

// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
module.exports = {
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/array-type': [2, {
      default: 'array',
      readonly: 'array',
    }],
    '@typescript-eslint/indent': [2, 2, {
      ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild', 'TSIntersectionType'],
      SwitchCase: 1,
      flatTernaryExpressions: true,
    }],
    '@typescript-eslint/member-delimiter-style': [2, {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }],
    '@typescript-eslint/no-namespace': 2,
    '@typescript-eslint/type-annotation-spacing': [2, {
      before: false,
      after: true,
      overrides: {
        arrow: {
          before: true,
          after: true,
        },
      },
    }],
    '@typescript-eslint/consistent-type-definitions': [2, 'type'],
    '@typescript-eslint/await-thenable': 2,
    '@typescript-eslint/no-floating-promises': 2,
    '@typescript-eslint/consistent-type-imports': [2, { prefer: 'type-imports' }],
    'no-redeclare': 0,
    '@typescript-eslint/no-redeclare': 2,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 2,
    semi: 'off',
    '@typescript-eslint/semi': [2, 'never'],
    '@typescript-eslint/strict-boolean-expressions': [2, {
      allowString: false,
      allowNumber: false,
      allowNullableObject: false,
      allowNullableBoolean: false,
      allowNullableString: false,
      allowNullableNumber: false,
      allowAny: false,
    }],
  },
}
