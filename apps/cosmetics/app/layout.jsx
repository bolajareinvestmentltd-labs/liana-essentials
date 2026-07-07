import './globals.css';
import { Header, DockMobile, Footer } from '@liana/ui';

export const metadata = {
  title: 'Liana Essentials | Cosmetics & Fragrances',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-16">
        <Header currentStore="cosmetics" />
        {children}
        <Footer />
        <DockMobile currentStore="cosmetics" />
      </body>
    </html>
  )
}
