import { Roboto } from 'next/font/google';
import { GlobalStateProvider } from '@/components/GlobalStateContext';
import './globals.css';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['cyrillic', 'latin'],
});

export const metadata = {
  title: 'Weather app',
  description: 'An app for weather forecast',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalStateProvider>
        <body className={roboto.className}>
          <div className="flex flex-col items-center justify-center p-5 md:p-2">
            <div className=" text-black/90 min-w-[320px] md:max-w-[700px] mx-auto w-full">
              {children}
            </div>
          </div>
        </body>
      </GlobalStateProvider>
    </html>
  );
}
