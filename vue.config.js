module.exports = {
    pwa: {
        workboxPluginMode: "GenerateSW",
        workboxOptions: {
            navigateFallback: "/index.html",
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ?
        '/minecraft-cord-book/' : '/'
}