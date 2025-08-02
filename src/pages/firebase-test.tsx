import { auth, db, storage } from "@/lib/firebase";

export default function FirebaseTest() {
  return (
    <div>
      <h1>✅ Firebase 初期化テスト</h1>
      <p>auth: {auth ? "OK" : "NG"}</p>
      <p>db: {db ? "OK" : "NG"}</p>
      <p>storage: {storage ? "OK" : "NG"}</p>
    </div>
  );
}