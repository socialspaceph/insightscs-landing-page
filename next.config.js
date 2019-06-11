module.exports = {
  assetPrefix: './',
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' },
    }
  },
}
