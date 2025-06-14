import { Kanit, Nunito } from "next/font/google";
import "@/style/globals.css";
import { Chat, Phone, Map, Star } from "@/components/icons/icons";
import LanguageSwitcher from "@/components/other/LanguageSwitcher";
import MobileMenu from "@/components/other/MobileMenu";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import Link from "next/link";

const kanit = Kanit({
  subsets: ["latin"],
  variable: "--kanit",
  weight: "300",
  display: "swap",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--nunito",
  weight: "300",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://cnefloorrent.channakorn.co.th"),
  title: "ออฟฟิศให้เช่า งามวงศ์วาน | อาคาร 9 ชั้น ใกล้เดอะมอลล์ พร้อมที่จอดรถ",
  description:
    "สำนักงานให้เช่าใจกลางงามวงศ์วาน อาคารสูง 9 ชั้น พื้นที่เริ่มต้น 30 ตร.ม. พร้อมแอร์ ระบบรักษาความปลอดภัย และที่จอดรถ",
  keywords: [
    "ออฟฟิศให้เช่า งามวงศ์วาน",
    "สำนักงานให้เช่า งามวงศ์วาน",
    "เช่าออฟฟิศใกล้เดอะมอลล์งามวงศ์วาน",
    "พื้นที่สำนักงานให้เช่า งามวงศ์วาน",
    "ออฟฟิศให้เช่า ถนนงามวงศ์วาน",
    "ออฟฟิศให้เช่า จตุจักร",
    "เช่าออฟฟิศ กรุงเทพ",
    "สำนักงานพร้อมใช้งานให้เช่า",
    "เช่าออฟฟิศ 9 ชั้น มีลิฟต์",
    "เช่าสำนักงานพร้อมที่จอดรถ",
  ],
  icons: {
    icon: "/images/logoCompany/com-1.png",
    apple: "/images/logoCompany/com-1.png-image.jpg",
  },
  openGraph: {
    title:
      "ออฟฟิศให้เช่า งามวงศ์วาน | อาคาร 9 ชั้น ใกล้เดอะมอลล์ พร้อมที่จอดรถ",
    description:
      "สำนักงานให้เช่าใจกลางงามวงศ์วาน อาคารสูง 9 ชั้น ใกล้เดอะมอลล์ พร้อมสิ่งอำนวยความสะดวกครบครัน",
    url: "https://cnefloorrent.channakorn.co.th",
    siteName: "CNE Floor Office Rental",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Channakorn Building - ออฟฟิศให้เช่า งามวงศ์วาน",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ออฟฟิศให้เช่า งามวงศ์วาน | อาคาร 9 ชั้น ใกล้เดอะมอลล์ พร้อมที่จอดรถ",
    description:
      "พื้นที่ให้เช่าตั้งแต่ 30 ตร.ม. พร้อมที่จอดรถ แอร์ ระบบรักษาความปลอดภัย เดินทางสะดวก ติดถนนใหญ่",
    images: ["/twitter-image.jpg"],
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "th" }];
}

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  return (
    <body className={`${nunito.variable} ${kanit.variable} antialiased`}>
      <NextIntlClientProvider>
        <div className="flex flex-col items-center justify-start w-full min-h-screen">
          <div className="flex flex-row items-center justify-center w-full h-20 px-2 lg:px-10 py-4 gap-2 bg-white">
            <div className="flex items-center justify-between w-full h-full p-2 gap-2 border-2 border-default bg-default rounded-xl">
              <span className="font-[600]">Channakorn</span>
              <span className="text-[#03994C]">Office&nbsp;For&nbsp;Rent</span>
            </div>
            <Link
              href="tel:0909075310"
              title="โทร 090-907-5310"
              className="hidden lg:flex items-center justify-center h-full px-6 py-2 gap-2 bg-primary text-white rounded-xl"
            >
              <Phone />
            </Link>
            <Link
              href="https://line.me/ti/p/buwWdN4vVx"
              target="_blank"
              className="hidden lg:flex items-center justify-center h-full px-6 py-2 gap-2 bg-primary text-white rounded-xl"
            >
              <Chat />
            </Link>
            <Link
              href="https://www.google.com/maps/dir//50,+ซอย+งามวงศ์วาน+57..."
              target="_blank"
              className="hidden lg:flex items-center justify-center h-full px-6 py-2 gap-2 bg-primary text-white rounded-xl"
            >
              <Map />
            </Link>
            <div className="hidden lg:flex items-center justify-between w-full h-full p-2 gap-2 border-2 border-default bg-default rounded-xl">
              <span>Call : 0909075310</span>
              <span> , 0896995678</span>
              <span> , 0816444464</span>
              <Star />
            </div>
            <div className="hidden lg:flex items-center justify-center h-full px-6 py-2 gap-2 bg-primary text-white rounded-xl">
              <LanguageSwitcher />
            </div>
            <Link
              href="tel:0909075310"
              title="โทร 090-907-5310"
              className="hidden lg:flex items-center justify-center h-full px-6 py-2 gap-2 border-2 border-default bg-default rounded-xl"
            >
              <span className="font-[600]">Contact&nbsp;Us</span>
            </Link>
            <MobileMenu />
          </div>
          <div className="flex items-center justify-center w-full h-full gap-2">
            {children}
          </div>
        </div>
      </NextIntlClientProvider>
    </body>
  );
}
