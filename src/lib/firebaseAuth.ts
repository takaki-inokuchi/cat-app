import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider, signInWithRedirect, signOut } from "firebase/auth";//getAuthは認証機能を使用するための関数

const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false;//windowがなければ、falseが返される。→これがないとSSR中だと(next.js)では一部のコードはサーバー側で実行されることがあるため、何も返さない致命的なエラーになる。サーバーサイドレンダリング
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//test(調べたい文字列)を使用してtrueかfalseの判定、window.navigatorでuserの情報を取得、スマホとかならture
};

const provider = new GoogleAuthProvider();//GoogleAuthProvider→google用のプロバイダーを作成

const loginWithGoogle = () => {
  if (isMobile()) {
    return signInWithRedirect(auth, provider);
  } else {
    return signInWithPopup(auth, provider);
  }
};

const logout = () => signOut(auth);

export { loginWithGoogle, logout };