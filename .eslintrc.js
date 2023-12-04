// .eslintrc.js
module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'function-expression',
      },
    ],
  },
  ignorePatterns: ['dist/'],
  env: {
    browser: true,
  },
};
