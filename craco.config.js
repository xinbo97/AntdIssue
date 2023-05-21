const path = require('path')

const CracoLessPlugin = require('craco-less')

// 这是为了使用绝对路径，做一层拼接
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
    webpack: {
        alias: {
            '@': resolve('src'),
            components: resolve('src/components')
        }
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderoptions: {
                    lessOptions: {
                        modifyvars: { '@primary-color': '@10A57A' },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
}
