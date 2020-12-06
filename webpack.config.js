const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    // console.log("🚀 ~ file: webpack.config.js ~ line 4 ~ env", env)
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: ['@ui-kitten/components']
        },
    }, argv);

    // config.module.rules = [{
    //     test: /\.svg$/,
    //     exclude: /node_modules/,
    //     use: [
    //         {
    //             loader: "@svgr/webpack"
    //         }
    //     ]
    // }, ...config.module.rules]

    // config.module.rules[2].oneOf[1] = {
    //     test: /\.(gif|jpe?g|png)$/,
    //     use: {
    //         loader: 'url-loader',
    //         options: {
    //             limit: 1000,
    //             esModule: false,
    //             name: 'static/media/[name].[hash:8].[ext]'
    //         }
    //     }
    // }

    // console.log('rules', config.module.rules)
    // console.log('rules[2].oneOf', config.module.rules[2].oneOf)
    // console.log('rules[2].oneOf[1]', config.module.rules[2].oneOf[1])

    return config;
};