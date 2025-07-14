import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function TelegramPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 bg-white p-3 rounded-lg shadow-xl z-50 flex items-center border border-blue-200">
      <a 
        href="https://t.me/yourchannel" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <Image 
          src="/telegram-icon.svg" 
          width={32} 
          height={32} 
          alt="Telegram"
        />
        <span className="ml-2 text-blue-500 font-medium">Join our Telegram</span>
      </a>
      <button 
        className="ml-3 text-gray-500 hover:text-gray-700"
        onClick={() => setIsVisible(false)}
      >
        ×
      </button>
    </div>
  );
}