import { initializeApp } from "firebase/app";//firebaseをアプリで使用するために初期化する関数
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";//getAuthは認証機能を使用するための関数

const firebaseConfig = {
  apiKey: "AIzaSyAd1m63mLBAd9o1PVmlA88n3z1wc6P3JfM",
  authDomain: "cat-app-9e6a8.firebaseapp.com",
  projectId: "cat-app-9e6a8",
  storageBucket: "cat-app-9e6a8.firebasestorage.app",
  messagingSenderId: "374133148516",
  appId: "1:374133148516:web:32d784a6d9490f7f3d0871"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();//GoogleAuthProvider→google用のプロバイダーを作成

const loginWithGoogle = () => signInWithPopup(auth, provider);//(どこで,どの方法か)
const logout = () => signOut(auth);

export { auth, loginWithGoogle, logout };