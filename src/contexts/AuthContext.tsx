import { createContext, useContext, useEffect, useState } from 'react';//createContextは親(pages)から子(firebaseAuth)に値を渡すため useContextで値を受け取る
import { User, onAuthStateChanged } from 'firebase/auth';//Userはログインしているユーザーの情報,onAuthStateChangedはリアルタイムで状態を監視
import { auth } from '@/lib/firebaseAuth';//初期化済みオブジェクトを取得

type AuthContextType = {
  user: User | null;//型を指定
};//型エイリアスの定義、userというプロパティがあり、型は、userまたはnull

const AuthContext = createContext<AuthContextType>({ user: null });//createContextを使用し、子にプロップスを渡せるように、渡す値はAuthContextTypeなので、userかnull←は初期値を指定して書く

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);//React.ReactNodeは描画できるすべての型を指定、<User | null>でどちらかの型が入るということ、初期値はnullということ、ユニオン型今回は<user | null>二つの型の選択肢を与えている

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);//ログイン状態が変化するたびにauth,(currentUser)←コールバックが呼び出される
    });//引数はauthと関数のsetUserまで分かれていることに注意
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);//useContext(AuthContext) とすると { user: null } が返ってきます。useAuthという名前で使えるようにしている