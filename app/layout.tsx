import type { Metadata } from "next";
import { Cormorant_Garamond, Italianno, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const italianno = Italianno({
  variable: "--font-italianno",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Elia Fernandez | Wedding Design & Scénographie",
  description:
    "Wedding Designer spécialisée en direction artistique et scénographie événementielle. Collaboration avec agences, wedding planners et professionnels du mariage.",
  openGraph: {
    title: "Elia Fernandez | Wedding Design & Scénographie",
    description:
      "Direction artistique, scénographie et création d'univers pour agences et professionnels de l'événementiel.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        alt: "Elia Fernandez | Wedding Design & Scénographie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elia Fernandez | Wedding Design & Scénographie",
    description:
      "Direction artistique, scénographie et création d'univers pour agences et professionnels de l'événementiel.",
    images: ["/og-image.jpg"],
  },
  robots: "index, follow",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${italianno.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
