// .eslintrc.js
module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  ignorePatterns: ['dist/'],
  env: {
    browser: true,
  },
};
