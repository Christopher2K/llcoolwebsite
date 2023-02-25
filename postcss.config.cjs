const presetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    presetEnv({
      features: {
        'nesting-rules': true,
      },
      state: 0,
      autoprefixer: {
        cascade: false,
        grid: false,
        grid: 'autoplace',
      },
      browsers: 'last 2 versions',
    }),
  ],
}
