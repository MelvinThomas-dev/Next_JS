import type { Metadata } from "next";
import { Inter ,MonteCarlo} from "next/font/google";
import "./globals.css";





// We can use the next/font/google module to load the fonts from Google Fonts. 
// This is the recommended way to load fonts in Next.js, as it provides better performance and optimizes the font loading process.
// We can specify the font family, subsets, and other options when loading the fonts.



const inter = Inter({
  subsets: ["latin"],// we can specify the subsets that we want to load. This can help reduce the amount of data that needs to be loaded, as we only load the subsets that we actually use in our application.
  display: "swap", // if the actual font was not loaded, the browser will use a fallback font until the actual font is loaded, and then it will swap to the actual font.
  weight: ["400", "700"], // we can specify the font weights that we want to load. This can help reduce the amount of data that needs to be loaded, as we only load the font weights that we actually use in our application.
});


const monteCarlo = MonteCarlo({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});



export const metadata: Metadata = {
  title: "Metadata and Fonts",
  description: "This is an example of how to use metadata and fonts in a Next.js application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={monteCarlo.className}>{children}</body> 
    </html>
  );
}
