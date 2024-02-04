/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.ts'
);
const nextConfig = withNextIntl({
  env: {
    APP_ENV: process.env.APP_ENV,
    // GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID
  }
})

module.exports = nextConfig
