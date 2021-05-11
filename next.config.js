const withImages = require('next-images');

module.exports = withImages({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['file-loader'], 
      },
      );
      return config;
    },
  });