import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "th"],
  defaultLocale: "th",
  localeDetection: false,
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
