import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ✅ あなたのプロジェクトに合わせて変更
const firebaseConfig = {
  apiKey: "AIzaSyAd1m63mLBAd9o1PVmlA88n3z1wc6P3JfM",
  authDomain: "cat-app-9e6a8.firebaseapp.com",
  projectId: "cat-app-9e6a8",
  storageBucket: "cat-app-9e6a8.firebasestorage.app",
  messagingSenderId: "374133148516",
  appId: "1:374133148516:web:32d784a6d9490f7f3d0871"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);//認証を扱うための設定を取り出す。
export const db = getFirestore(app);//データベース機能を取り出す
export const storage = getStorage(app);//ファイル保存機能を取り出す。