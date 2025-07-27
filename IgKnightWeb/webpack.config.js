// webpack.config.js
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['javascript', 'typescript', 'json', 'css', 'html'],
      filename: 'static/[name].worker.js',
    })
  ]
};
