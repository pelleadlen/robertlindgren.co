import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: [
    { path: "../../public/fonts/DesktopFonts-Söhne-Buch.otf", weight: "400 " },
  ],
});

export const metadata = {
  title: "Robert Lindgren",
  description:
    "Robert has been involved in a wide variety of international digital products, digital design systems, brand identity systems, envisioning design, concept development, communication design, interactive prototypes, logo design, motion design and, creative leadership.Swedish Design Awards Winner 2011, Awwwards Winner 2017. Visuelt, Grafill Jury 2023.Selected client collaborations from EY Doberman: LEGO, MoMA, Spotify, Google, Starbucks, Oscar, Wealthsimple and, IBM.",
};

export default function RootLayout({ children }) {
  const bodyClass = `${display.className}`;
  return (
    <html lang="en">
      <body className={bodyClass}>{children}</body>
    </html>
  );
}
