import { getCvDictionary, hasLocale } from "@/constants/cv-data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type LangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
};

export async function generateMetadata({ params }: LangLayoutProps): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dictionary = getCvDictionary(lang);

  return {
    title: {
      default: dictionary.metadata.title,
      template: `%s | ${dictionary.profile.name}`,
    },
    description: dictionary.metadata.description,
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
    authors: [{ name: dictionary.profile.name }],
    creator: dictionary.profile.name,
    openGraph: {
      title: dictionary.metadata.openGraphTitle,
      description: dictionary.metadata.openGraphDescription,
      type: "website",
      locale: dictionary.metadata.openGraphLocale,
      url: `/${lang}`,
    },
    twitter: {
      card: "summary",
      title: dictionary.metadata.twitterTitle,
      description: dictionary.metadata.twitterDescription,
    },
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        es: "/es",
      },
    },
  };
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  return children;
}
