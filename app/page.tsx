import { defaultLocale } from "@/constants/cv-data";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(`/${defaultLocale}`);
}
