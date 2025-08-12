import { createContext, useContext, useEffect, useState } from 'react';//createContextは親(pages)から子(firebaseAuth)に値を渡すため useContextで値を受け取る
import { User, onAuthStateChanged, getRedirectResult, GoogleAuthProvider } from 'firebase/auth';//Userはログインしているユーザーの情報,onAuthStateChangedはリアルタイムで状態を監視
import { auth } from '@/lib/firebaseAuth';//初期化済みオブジェクトを取得

type AuthContextType = {
  user: User | null;//型を指定
  loading: boolean;
};//型エイリアスの定義、userというプロパティがあり、型は、userまたはnull

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});//createContextを使用し、子にプロップスを渡せるように、渡す値はAuthContextTypeなので、userかnull←は初期値を指定して書く

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);//React.ReactNodeは描画できるすべての型を指定、<User | null>でどちらかの型が入るということ、初期値はnullということ、ユニオン型今回は<user | null>二つの型の選択肢を与えている
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });//unsubscribeは朗読を辞める、登録解除の意味

    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          setUser(result.user);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error('リダイレクトログインエラー:', error);
      });

    return () => unsubscribe();//監視を終了するとき(ブラウザを閉じたり)onAuthStateChangedが反応してunsubscribeが呼び出されてuseEffectでreturnが呼び出されると、クリーンアップという仕組みになるので監視が終了する

  }, []);//useEffectの中でreturnを使用すると監視をonAuthStateChangedを終了させるという意味

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );//app.texで使用。囲まれた内容の中ではログイン状態が保存されるようになっている
};//コンポーネントの上位を「Provider」で囲むとその配下の子コンポーネントたちはvalueに渡したデータを自由に読み取ることができる　「.」で区切っているのはオブ雀殿Providerを使用するという意味（特別なプロパティ）

export const useAuth = () => useContext(AuthContext);//useContext(AuthContext) とすると { user: null } が返ってきます。useAuthという名前で使えるようにしている