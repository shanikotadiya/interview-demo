// Use sass-loader modern API to avoid "legacy JS API is deprecated" warning (Dart Sass 2.0)
module.exports = {
  style: {
    sass: {
      loaderOptions: {
        api: 'modern',
      },
    },
  },
};
