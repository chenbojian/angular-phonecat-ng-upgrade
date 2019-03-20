module.exports = {
    mode: 'development',
    entry: './index',
    resolve: {
        extensions: ['.js', '.ts'],
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            }
        ]
    }

}