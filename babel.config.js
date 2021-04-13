const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

const plugins = []

// 发布项目时 ESLint 不允许使用 console
if (IS_PROD) {
  plugins.push('transform-remove-console')
}

// lazy load ant-design-vue   按需引入 ant-design-vue
// if your use import on Demand, Use this code
plugins.push([
  'import',
  {
    'libraryName': 'ant-design-vue',
    'libraryDirectory': 'es',
    'style': true // `style: true` 会加载 less 文件
  }
])

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins
}
