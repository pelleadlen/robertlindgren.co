import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import {GoogleTagManager} from "@next/third-parties/google";

const display = localFont({
  src: [
    { path: "../../public/fonts/DesktopFonts-Söhne-Buch.otf", weight: "400 " },
  ],
});

export const metadata = {
  title: "Robert Lindgren",
  description:
    "Digital Designer and Director Robert has been involved in a wide variety of international digital products, digital design systems, brand identity systems, envisioning design, concept development, communication design, interactive prototypes, logo design, motion design and, creative leadership. Swedish Design Awards Winner 2011, Awwwards Winner 2017. Visuelt, Grafill Jury 2023.Selected client collaborations from EY Doberman: LEGO, MoMA, Spotify, Google, Starbucks, Oscar, Wealthsimple and, IBM.",
};

export default function RootLayout({ children }) {
  const bodyClass = `${display.className}`;
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={bodyClass}>{children}</body>
      <GoogleTagManager gtmId="G-Q90703FXS7"/>
    </html>
  );
}
