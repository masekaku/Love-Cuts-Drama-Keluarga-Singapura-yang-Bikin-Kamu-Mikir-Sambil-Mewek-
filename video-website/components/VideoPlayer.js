export default function VideoPlayer({ videoData }) {
  if (!videoData) return <div className="text-center py-10">Loading video...</div>;
  
  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="aspect-w-16 aspect-h-9 bg-black rounded-xl overflow-hidden">
        <video 
          src={`https://cdn.videy.co/${videoData.id}.mp4`}
          className="w-full h-full"
          controls
          autoPlay
          playsInline
        />
      </div>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold">{videoData.title}</h2>
        <div className="flex items-center mt-2 text-gray-600">
          <span className="mr-4">Duration: {videoData.duration}</span>
          <span>Views: {videoData.views || '1.2K'}</span>
        </div>
        <p className="mt-3 text-gray-700">{videoData.description}</p>
      </div>
    </div>
  );
}