import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteUrl } from "@/lib/site";
import { company } from "@/data/company";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${company.name} | Engineering Spaces for Life`;
const description =
  "SVL Constructions delivers residential, commercial, industrial, and civil engineering projects with a focus on quality, safety, and reliable execution.";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: siteUrl.toString(),
  telephone: company.contact.phone,
  email: company.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.contact.officeAddress,
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "501218",
    addressCountry: "IN",
  },
  hasMap: company.contact.googleMapsHref,
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  applicationName: company.name,
  openGraph: {
    title,
    description,
    siteName: company.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${geistMono.variable} min-h-dvh overflow-x-clip scroll-smooth antialiased`}
    >
      <body className="min-h-dvh flex flex-col overflow-x-clip font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
