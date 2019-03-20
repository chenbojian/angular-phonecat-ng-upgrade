const path = require('path');

module.exports = {
    mode: 'development',
    entry: './new-app/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist'),
    }
};
