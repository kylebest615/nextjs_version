import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "V4 Building Solutions | Engineering Tomorrow",
  description: "Chartered Engineer (Electrical) & Licensed KSEB Class B Contractors delivering premium Electrical, Plumbing, and BIM solutions in Kerala, India.",
  keywords: "electrical contractor, plumbing, BIM training, chartered engineer, KSEB, Kerala, MEP, Revit, AutoCAD",
  authors: [{ name: "V4 Building Solutions" }],
  openGraph: {
    title: "V4 Building Solutions | Engineering Tomorrow",
    description: "Premium Electrical, Plumbing, and BIM solutions with 98.7% success rate",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
