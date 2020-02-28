module.exports = {
    runtimeCompiler: true,
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "./node_modules/bootstrap/scss/bootstrap";
                    @import "./node_modules/bootstrap-vue/src/index";
                    @import "~@/scss/_variables.scss";
                `
            }
        }
    },
    publicPath: process.env.VUE_APP_BASE_ROUTE,     
    outputDir: '../harsanyi/front-end',
    chainWebpack: (config) => {
        config.plugin('html').tap(args => {
            args[0].title = 'Harsanyi Foundation';
            return args;
        });
    }
}