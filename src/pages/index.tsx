import { useAuth } from '@/contexts/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="text-2x1 font-bold mb-4">ようこそ猫アプリへ</h2>
      {user ? (
        <p>こんにちは、{user.displayName}さん！</p>
      ) : (
      <p>ログインして猫の管理を始めましょう！</p>
      )}
    </div>
  );
}