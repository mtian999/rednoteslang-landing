import { locales as localesArr } from "@/lib/i18n";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = [...localesArr];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return { messages: (await import(`./locales/${locale}.json`)).default };
});
