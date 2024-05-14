import { Inter } from 'next/font/google';
import { GlobalStateProvider } from '@/components/GlobalStateContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Weather app',
  description: 'An app for weather forecast',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <GlobalStateProvider>
        <body className={inter.className}>{children}</body>
      </GlobalStateProvider>
    </html>
  );
}
