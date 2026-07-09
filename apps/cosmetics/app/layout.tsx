import './globals.css';
import { DockMobile, GlobalFooter } from '@liana/ui';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-gray-900 pb-16 md:pb-0">
        {children}
        <GlobalFooter />
        <DockMobile />
      </body>
    </html>
  );
}
