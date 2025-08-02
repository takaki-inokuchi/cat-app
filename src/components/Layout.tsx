import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ ヘッダー */}
      <header className="bg-blue-600 text-white p-4 shadow">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">猫アプリ</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">ホーム</a>
            <a href="/about" className="hover:underline">このサイトについて</a>
          </nav>
        </div>
      </header>

      {/* ✅ ページごとの中身 */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}