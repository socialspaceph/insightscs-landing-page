const withImages = require('next-images')

module.exports = {
  assetPrefix: './',
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' },
    }
  },
}

module.exports = withImages()
