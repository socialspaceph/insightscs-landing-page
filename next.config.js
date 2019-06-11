const PRODUCTION_URL = 'C:/Users/James/Desktop/Work/insightscs-landing-page/out'

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProduction ? PRODUCTION_URL : '',
  publicRuntimeConfig: {
    linkPrefix: isProduction ? PRODUCTION_URL : '',
  },
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' },
    }
  },
}
