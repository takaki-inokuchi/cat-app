import { NextSeo } from 'next-seo';
import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await addDoc(collection(db, 'cats'), {
        name,
        birthdate,
        gender,
        createAt: new Date(),
      });
      setSuccess(true);
      setName('');
      setBirthdate('');
      setGender('');
    } catch (error) {
      console.error('登録失敗', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <NextSeo
        title="猫登録 | 管理アプリ"
        description="猫を登録するフォームです。"
        openGraph={{
          url: "https???",
          title: "猫アプリ | ホーム",
          description: "猫を管理できるアプリです",
          siteName: "猫アプリ",
        }}
      ></NextSeo>

      <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-blue-800">猫の登録フォーム</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">
              名前
            </label>
            <input type="text" id="name" name="name" placeholder="猫の名前" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-400 px-1 py-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 " />
          </div>

          <div>
            <label htmlFor="birthdate" className="block font-semibold mb-1">
              誕生日
            </label>
            <input type="text" id="birthdate" name="birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} className="w-full border border-gray-400 px-1 py-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"></input>
          </div>

          <div>
            <label htmlFor="gender" className="block font-semibold mb-1">
              性別
            </label>
            <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="w-full border border-gray-400 px-1 py-1 rounded focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="">選択してください。</option>
              <option value="male">オス</option>
              <option value="female">メス</option>
            </select>
          </div>

          <div className="text-center">
            <button type="submit" className="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded" >
              {loading ? "登録中..." : "登録"}
            </button>
            {success && <p className="text-green-600 mt-2">登録が完了しました！</p>}
          </div>
        </form>
      </div>
    </div>
  );
}