import Header from '../components/Header';
import VideoPlayer from '../components/VideoPlayer';
import TelegramPopup from '../components/TelegramPopup';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto py-6 px-4">
        <VideoPlayer videoId="dQw4w9WgXcQ" />
      </main>
      <TelegramPopup />
      {/* Prefetch Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/service-worker.js');
            }
            // Prefetch next video
            const nextVideoId = 'next-video-id';
            const videoUrl = '/videos/' + nextVideoId;
            fetch(videoUrl, { priority: 'low' });
          `,
        }}
      />
    </div>
  );
}