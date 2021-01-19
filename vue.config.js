module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import '~@/styles/quasar.variables.scss';
        @import '~@/styles/variables.scss';
        @import '~@/styles/mixins.scss';`,
      },
    },
    sourceMap: true,
  },
  pluginOptions: {
    quasar: {
      importStrategy: 'pascal',
      rtlSupport: false,
    },
    i18n: {
      locale: 'ru',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
  transpileDependencies: ['quasar'],
};
