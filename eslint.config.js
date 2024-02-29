const antfu = require('@antfu/eslint-config').default

module.exports = antfu({
  ignores: ['node_modules/*', 'dist/*', 'assets/*'],
  react: true,
  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
  },
})
