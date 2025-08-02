import '@/styles/globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';

import type { AppProps } from 'next/app';

function App({Component,pageProps}: AppProps){
  return(
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );//firebase認証の状態を全体に共有、共通レイアウトを設定、Layoutのchilderenの中に入るのが、pageProps→propsとは値のこと
}

export default App;