import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { loginWithGoogle, logout } from '@/lib/firebaseAuth';

export const Header = () => {
  const { user } = useAuth();

  return (
    <header className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
      <h1 className="text-lg font-bold">
        <Link href="/">猫アプリ</Link>
      </h1>
      <nav>
        {user ? (
          <div className="flex space-x-16">
            <Link href="/register" className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-700">
            猫の登録
            </Link>
            <button onClick={logout} className="bg-blue-500 px-1 py-1 rounded hover:bg-blue-700">
              ログアウト
            </button>
          </div>

        ) : (
          <button onClick={loginWithGoogle} className="bg-green-500 px-3 py-1 rounded">ログイン</button>
        )}
      </nav>
      <nav>

      </nav>
    </header>
  );
};
