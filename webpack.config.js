const HtmlWebpackPlugin = require('html-webpack-plugin');
const {configData1, configData2} = require('./src/mockData');
module.exports = ({dataType}) => {
    return {
        entry: {
            app : './src/index.js'
        },
        output: {
            filename: 'app.js'
        },
        plugins:[
            new HtmlWebpackPlugin({
                template: './src/template.ejs',
                data : dataType === "configData1" ? configData1 : configData2
            })
        ]
    }
}
