export default function Header() {
  return (
    // 👇 ヘッダー全体の見た目：青背景・白文字
    <header className="bg-blue-500 text-white py-4 px-6">
      {/* 👇 中央にタイトルを配置 */}
      <h1 className="text-2xl font-bold">猫アプリ 🐱</h1>
    </header>
  );
}