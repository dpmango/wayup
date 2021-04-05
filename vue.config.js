module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: '@import "@/scss/app.scss";'
        }
      },
      extract: false
    },

};

