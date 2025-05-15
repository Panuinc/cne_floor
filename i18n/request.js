import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = ['en', 'th'].includes(await requestLocale)
    ? await requestLocale
    : 'en';

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
