import React from 'react';
import { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { loginWithGoogle, logout, auth } from '@/lib/firebaseAuth';
import { getRedirectResult } from 'firebase/auth';
import { NextSeo } from 'next-seo';//SEO対策
import Image from 'next/image';//ロゴ用
import { User } from 'firebase/auth';
import { useState } from 'react';

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-4">
        <p>認証状態を確認中🐈...</p>
      </main>
    );
  }

  return (
    <div>
      <NextSeo title="猫アプリ | ホーム" description="猫を管理できるアプリです"></NextSeo>

      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-4">
        <Image src={"/logo.png"} alt="Cat App Logo" width={100} height={100} className="mb-4" />
        <h1 className="text-3x1 font-bold mb-6 text-gray-800">ようこそ、猫アプリへ</h1>

        {user ? (
          <div>
            <p className="text-lg">こんにちは、{user.displayName}さん！</p>
            <button onClick={logout} className="px-6 py-2 bg-red-500 text-white hover:bg-red-600">
              ログアウト
            </button>
          </div>
        ) :
          (
            <div>
              <p className="text-lg text-gray-600">ログインしよう</p>
              <button onClick={loginWithGoogle} className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                ログイン
              </button>
            </div>
          )
        }
      </main>
    </div>
  );//パディング、左右px py上下 lgは文字サイズを少し大きく16px→18px  pは上下左右に適用
}