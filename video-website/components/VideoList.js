import Link from 'next/link';

export default function VideoList({ videos, currentVideoId }) {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold mb-4">More Videos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos
          .filter(video => video.id !== currentVideoId)
          .map(video => (
            <Link 
              key={video.id} 
              href={`/?video=${video.id}`}
              scroll={false}
              prefetch={false}
              className="block group"
            >
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition"></div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1.5 py-0.5 rounded">
                  {video.duration}
                </div>
              </div>
              <h4 className="mt-2 font-semibold group-hover:text-blue-600 transition">
                {video.title}
              </h4>
            </Link>
          ))
        }
      </div>
    </div>
  );
}