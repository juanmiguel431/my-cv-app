import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Juan Miguel Paulino Carpio | Senior Software Engineer CV",
    template: "%s | Juan Miguel Paulino Carpio",
  },
  description:
    "Curriculum vitae of Juan Miguel Paulino Carpio, Senior Software Engineer with 15+ years of experience in .NET, Java, Python, Next.js, AWS, and Azure across fintech, insurance, and healthcare.",
  applicationName: "Juan Miguel CV",
  keywords: [
    "Juan Miguel Paulino Carpio",
    "Curriculum Vitae",
    "Senior Software Engineer",
    ".NET",
    "Java",
    "Python",
    "Next.js",
    "AWS",
    "Azure",
  ],
  authors: [{ name: "Juan Miguel Paulino Carpio" }],
  creator: "Juan Miguel Paulino Carpio",
  openGraph: {
    title: "Juan Miguel Paulino Carpio | Senior Software Engineer CV",
    description:
      "Professional experience, technical stack, and education of Juan Miguel Paulino Carpio.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Juan Miguel Paulino Carpio | Senior Software Engineer CV",
    description:
      "Professional experience, technical stack, and education of Juan Miguel Paulino Carpio.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
