import { loginWithGoogle, logout } from "@/lib/firebaseAuth";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";

export default function LoginPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);//ずっと監視してくれるのをやめるために一回しか呼び出されないもので返す
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">ログインページ</h1>
      {user ? (
        <>
          <p>こんにちは、{user.displayName} さん</p>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            onClick={logout}
          >
            ログアウト
          </button>
        </>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={loginWithGoogle}
        >
          Googleでログイン
        </button>
      )}
    </div>
  );
}