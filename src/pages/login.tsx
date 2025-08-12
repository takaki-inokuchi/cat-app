import React from 'react';
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { loginWithGoogle, logout, auth } from '@/lib/firebaseAuth';
import { getRedirectResult } from 'firebase/auth';

const LoginPage = () => {
  const { user } = useAuth();

 useEffect(() => {
  getRedirectResult(auth)
  .then((result) =>{
    if(result?.user){
      console.log("リダイレクトログイン成功：",result.user);
    }else{
      console.log("リダイレクト結果なし");
    }
  })
  .catch((error)=> {
    console.error("リダイレクトログインエラー：",error);
  });
 },[]);

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl mb-4">ログインページ</h2>
      {user ? (
        <div>
          <p>こんにちは、{user.displayName}さん！</p>
          <button onClick={logout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            ログアウト
          </button>
        </div>
      ) : (
        <button onClick={loginWithGoogle} className="bg-blue-500 text-white px-4 py-2 rounded">
          Googleでログイン
        </button>
      )}
    </div>
  );
};

export default LoginPage;