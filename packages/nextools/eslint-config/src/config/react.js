// https://github.com/yannickcr/eslint-plugin-react
module.exports = {
  parserOptions: {
    useJSXTextNode: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: '17',
    },
  },
  rules: {
    'jsx-quotes': [2, 'prefer-double'],
    'react/boolean-prop-naming': [2, {
      rule: '^(is|has|should)[A-Z]([A-Za-z0-9]?)+',
    }],
    'react/forbid-component-props': [2, { forbid: ['className'] }],
    'react/forbid-dom-props': [2, { forbid: ['class'] }],
    'react/no-children-prop': 2,
    'react/no-danger': 2,
    'react/no-danger-with-children': 2,
    'react/no-deprecated': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-string-refs': 2,
    'react/no-this-in-sfc': 2,
    'react/no-unknown-property': 2,
    'react/no-unsafe': 2,
    'react/no-unused-state': 2,
    'react/self-closing-comp': 2,
    'react/style-prop-object': 2,
    'react/void-dom-elements-no-children': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-child-element-spacing': 2,
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-spacing': 2,
    'react/jsx-equals-spacing': 2,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
    'react/jsx-indent': [2, 2, {
      indentLogicalExpressions: true,
    }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-props-no-multi-spaces': 2,
    'react/jsx-tag-spacing': [2, {
      closingSlash: 'never',
      beforeSelfClosing: 'never',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': [2, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
  },
}
