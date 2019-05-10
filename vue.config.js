module.exports = {
  lintOnSave: 'error',
  assetsDir: './src/assets',
  devServer: {
    quiet: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
      },
    },
  },
};
