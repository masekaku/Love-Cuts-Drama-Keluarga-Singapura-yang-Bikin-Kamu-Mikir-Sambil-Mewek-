export default function Header() {
  return (
    <header className="bg-black text-white p-4 shadow-lg sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">VideoStream</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Trending</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Categories</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}