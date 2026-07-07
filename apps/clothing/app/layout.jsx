import './globals.css';
import { Header, DockMobile, Footer } from '@liana/ui';

export const metadata = {
  title: 'Liana Clothing | Premium Apparel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-16">
        <Header currentStore="clothing" />
        {children}
        <Footer />
        <DockMobile currentStore="clothing" />
      </body>
    </html>
  )
}
