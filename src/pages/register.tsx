import { NextSeo } from 'next-seo';

export default function ResiterPage() {
  return (
    <div>
      <NextSeo
        title="猫登録 ｜ 管理アプリ" 
        description="猫を登録するフォームです。"
        openGraph={{
          url:"https???",
          title:"猫アプリ | ホーム",
          description:"猫を管理できるアプリです",
          siteName:"猫アプリ",
        }}
      ></NextSeo>
    </div>
  )
}