import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const baseSiteConfig = {
  name: "Red Note Slang Translator | Understand Red Note Slang - Enhance Your Experience",
  description:
    "The hottest tool for 2025: Red Note Slang Translator. Your guide to Red Note language, helping you understand the latest slang and black language. Enhance your browsing and creation process with this free tool.",
  url: "https://rednoteslang.fun",
  ogImage: "/logo.png",
  metadataBase: "/",
  keywords: [
    "Red Note Slang Translator",
    "Red Note slang tool",
    "slang Translator",
    "most efficient",
    "community language",
  ],
  authors: [
    {
      name: "maomaoyu",
      url: "",
      twitter: "",
    },
  ],
  creator: "maomaoyu",
  openSourceURL: "",
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  nextThemeColor: "dark", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    {
      name: "twitter",
      href: "https://twitter.com/maomaoyu_coffee",
      icon: BsTwitterX,
    },
    // {
    //   name: "buyMeCoffee",
    //   href: "https://www.buymeacoffee.com/weijunext",
    //   icon: SiBuymeacoffee,
    // },
  ],
  footerLinks: [
    { name: "email", href: "mailto:support@top4ai.com", icon: MdEmail },
    {
      name: "twitter",
      href: "https://twitter.com/maomaoyu_coffee",
      icon: BsTwitterX,
    },
    // { name: "github", href: "https://github.com/weijunext/", icon: BsGithub },
    // {
    //   name: "buyMeCoffee",
    //   href: "https://www.buymeacoffee.com/weijunext",
    //   icon: SiBuymeacoffee,
    // },
  ],
  footerProducts: [{ url: "https://top4ai.com/", name: "猫猫鱼 Top4AI Tools" }],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};
