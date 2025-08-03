import { Header } from './Header';
import { Footer } from './Footer';
//React.ReactNodeはテキスト・JSX要素・null などを含む広い型）を型指定
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto py-6">{children}</main>
      <Footer />
    </div>
  );
};