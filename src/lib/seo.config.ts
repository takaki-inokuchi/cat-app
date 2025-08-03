import { DefaultSeoProps } from "next-seo";

const defaultSeoConfig: DefaultSeoProps = {
  title: "猫アプリ",
  description: "かわいい猫の情報を管理しよう！",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https",
    siteName: "猫管理アプリ",
  },
  twitter: {
    handle: "@nekokanri",
    site: "@nekokanri",
    cardType: "summary_large_image",
  },
};

export default defaultSeoConfig;