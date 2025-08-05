import { NextSeo } from 'next-seo';

export default function ResiterPage() {
  return (
    <div>
      <NextSeo
        title="猫登録 ｜ 管理アプリ"
        description="猫を登録するフォームです。"
        openGraph={{
          url: "https???",
          title: "猫アプリ | ホーム",
          description: "猫を管理できるアプリです",
          siteName: "猫アプリ",
        }}
      ></NextSeo>

      <div className="max-w-x1 mx-Auto mt-10 bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-blue-800">猫の登録フォーム</h1>
        <form>
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">
              名前
            </label>
            <input type="text" id="name" name="name" placeholder="猫の名前" className="w-100 border border-gray-400 px-1 py-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 " />
          </div>

          <div>
            <label htmlFor="birthdate" className="block font-semibold mb-1">
              誕生日
            </label>
            <input type="text" id="birthdate" name="birthdate" className="w-100 border border-gray-400 px-1 py-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"></input>
          </div>

          <div>
            <label htmlFor="gender" className="block font-semibold mb-1">
              性別
            </label>
            <input type="text" id="gender" name="gender" className="w-100 border border-gray-400 px-1 py-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"></input>
          </div>

          <div className="text-center">
            <button type="submit" className="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded" >
              登録
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}