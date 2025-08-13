import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: "https://cat-app-zeta.vercel.app/",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = initializeApp(firebaseConfig);//firebaseConfig は Firebase コンソールで発行される設定情報で、APIキーやプロジェクトIDなどが入っています。認証機能を使用するにはどのプロジェクトを使用するか決定するため　initializeは初期化

export const auth = getAuth(app);//認証を扱うための設定を取り出す。
export const db = getFirestore(app);//データベース機能を取り出す
export const storage = getStorage(app);//ファイル保存機能を取り出す。