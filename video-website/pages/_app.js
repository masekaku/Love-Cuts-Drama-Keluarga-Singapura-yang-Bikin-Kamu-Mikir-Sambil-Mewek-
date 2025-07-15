import '@/styles/globals.css';
import Header from '@/components/Header';
import TelegramPopup from '@/components/TelegramPopup';

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <TelegramPopup />
    </div>
  );
}