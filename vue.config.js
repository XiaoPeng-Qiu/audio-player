const path = require('path')
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('styles', path.join(__dirname, './src/assets/styles'))      
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~styles/variables.scss";
          @import "~styles/mixin.scss";
        `
      }
    }
  }
}


// @import "~@/assets/styles/mixin.scss";
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8080',
  //       pathRewrite: {
  //         '^/api': '/mock'
  //       }
  //     }
  //   }
  // },