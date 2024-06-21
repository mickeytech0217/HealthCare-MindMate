module.exports = {
  parser: 'babel-eslint',
  extends: ['prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: 'es5',
        jsxBracketSameLine: false,
      },
    ],
  },
};
