import '@/styles/globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { Layout } from '@/components/Layout';
import defaultSeoConfig from '@/lib/seo.config';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { getRedirectResult, User } from 'firebase/auth';
import { auth } from '../lib/firebase';

function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result && result.user) {
          const user: User = result.user;
          console.log("Googleログイン成功：", user);
        }
      })
      .catch((error) => {
        console.log("Googleリダイレクトログインエラー：", error);
      });
  }, []);
  
  return (
    <AuthProvider>
      <Layout>
        <DefaultSeo {...defaultSeoConfig} />
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );//firebase認証の状態を全体に共有、共通レイアウトを設定、Layoutのchilderenの中に入るのが、pageProps→propsとは値のこと
}

export default App;