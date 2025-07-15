import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TelegramPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasClosed = localStorage.getItem('telegramPopupClosed');
      if (!hasClosed) setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('telegramPopupClosed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white p-3 rounded-lg shadow-xl z-50 flex items-center border border-blue-200 animate-fadeIn">
      <a 
        href="https://t.me/yourchannel" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <div className="bg-blue-500 p-2 rounded-full">
          <Image 
            src="/telegram-icon.svg" 
            width={24} 
            height={24} 
            alt="Telegram"
          />
        </div>
        <span className="ml-2 text-blue-600 font-medium">Join our Telegram</span>
      </a>
      <button 
        className="ml-3 text-gray-500 hover:text-gray-700"
        onClick={handleClose}
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
}