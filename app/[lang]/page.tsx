import Curriculum from "@/components/curriculum";
import { getCvDictionary, hasLocale, locales } from "@/constants/cv-data";
import { notFound } from "next/navigation";

type LangPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangPage({ params }: LangPageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dictionary = getCvDictionary(lang);

  return <Curriculum dictionary={dictionary} currentLocale={lang} />;
}
