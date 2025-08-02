import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">ホーム</h1>
      <Link href="/login">
        <span className="text-blue-500 underline">ログインページへ</span>
      </Link>
    </div>
  );
}
