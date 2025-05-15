import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin({
  next: {
    i18n: {
      locales: ['en', 'th'],
      defaultLocale: 'th',
      localeDetection: false
    },
    images: {
      unoptimized: true
    }
  }
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
