const path = require('path');

module.exports = {
    mode: 'development',
    entry: './new-app/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist'),
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {test: /\.tsx?$/, loader: "ts-loader"}
        ]
    },
    resolve: {
        extensions: [".js", ".ts", ".json", ".jsx", ".css"],
    },
    devtool: 'source-map',
};
