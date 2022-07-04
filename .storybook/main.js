const path = require('path')

module.exports = {
  typescript: { reactDocgen: false },
  stories: ['../src/**/*.stories.mdx', '../src/cmoponents'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve('./')]
    config.resolve.alias['next/image'] = require.resolve('./NextImage.js')
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    })
    return config
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
}
