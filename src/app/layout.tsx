import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import ThemeProvider from "@/providers/ThemeProvider";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: {
    default: "اعتماد دانه | تأمین‌کننده دانه و خوراک دام و طیور",
    template: "%s | اعتماد دانه",
  },
  description:
    "اعتماد دانه شیر کوه — تأمین‌کننده دانه و خوراک دام و طیور، یزد، شهرک صنعتی یزد مهر",
  keywords: [
    "اعتماد دانه",
    "خوراک دام",
    "خوراک طیور",
    "یزد",
    "شهرک صنعتی یزد مهر",
    "دانه دام و طیور",
  ],
  openGraph: {
    title: "اعتماد دانه",
    description: "اعتماد دانه — یزد، شهرک صنعتی یزد مهر",
    type: "website",
    locale: "fa_IR",
    siteName: "اعتماد دانه شیر کوه",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "اعتماد دانه شیر کوه",
  alternateName: "Etemad Dane Shir Kooh",
  email: "etemaddane@gmail.com",
  telephone: "+989134588060",
  address: {
    "@type": "PostalAddress",
    streetAddress: "شهرک صنعتی یزد مهر",
    addressLocality: "یزد",
    addressCountry: "IR",
  },
  sameAs: ["https://instagram.com/etemaddane"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html suppressHydrationWarning className={vazirmatn.variable} dir="rtl" lang="fa">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k='edsk-theme',t=localStorage.getItem(k);if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
