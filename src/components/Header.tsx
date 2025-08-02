import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { loginWithGoogle,logout } from '@/lib/firebaseAuth';

export const Header = () => {
  const {user} = useAuth();

  return(
    <header className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
      <h1 className="text-lg font-bold">
        <Link href="/">猫アプリ</Link>
      </h1>
      <nav>
        {user?(
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
            ログアウト
          </button>
        ):(
          <button onClick={loginWithGoogle} className="bg-green-500 px-3 py-1 rounded">ログイン</button>
        )}
      </nav>
    </header>
  );
};
