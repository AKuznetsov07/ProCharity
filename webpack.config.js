const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        layout: './src/layout.js',
        content: './src/content.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '',
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        port: 8080
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: '/node_modules/'
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                    'postcss-loader'
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'lk-account-description.html',
          template: './src/lk-account-description.html',
          inject: 'body'
        }),
        new HtmlWebpackPlugin({
          filename: 'registration-description.html',
          template: './src/registration-description.html',
          inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'ui-kit.html',
            template: './src/ui-kit.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'lk-account-contacts.html',
            template: './src/lk-account-contacts.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'lk-competencies.html',
            template: './src/lk-competencies.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'lk-motivation.html',
            template: './src/lk-motivation.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'lk-personal-data.html',
            template: './src/lk-personal-data.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'lk-portfolio.html',
            template: './src/lk-portfolio.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'lk-social.html',
            template: './src/lk-social.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'lk-links.html',
            template: './src/lk-links.html',
            inject: 'body'
        }),
         new HtmlWebpackPlugin({
            filename: 'lk-donations.html',
            template: './src/lk-donations.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'registration.html',
            template: './src/registration.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'registration-contact.html',
            template: './src/registration-contact.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'registration-first-step.html',
            template: './src/registration-first-step.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'registration-confim-email.html',
            template: './src/registration-confim-email.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'registration-new-volunteer.html',
            template: './src/registration-new-volunteer.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'registration-links.html',
            template: './src/registration-links.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'registration-final.html',
            template: './src/registration-final.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'settings-change-password.html',
            template: './src/settings-change-password.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'settings-notifications.html',
            template: './src/settings-notifications.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'settings-profile.html',
            template: './src/settings-profile.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'registration-documents.html',
            template: './src/registration-documents.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'account-documents.html',
            template: './src/account-documents.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'registration-legal.html',
            template: './src/registration-legal.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'lk-legal.html',
            template: './src/lk-legal.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'account-password.html',
            template: './src/account-password.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'account-access.html',
            template: './src/account-access.html',
            inject: 'body'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
    ]
}
