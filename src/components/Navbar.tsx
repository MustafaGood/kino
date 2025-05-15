import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 via-gray-900 to-black shadow-2xl py-3 rounded-b-3xl border-b-2 border-blue-700/40 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 text-3xl font-extrabold text-white tracking-wide drop-shadow-lg">
            <img src="/globe.svg" alt="Kino Logo" className="h-10 w-10 animate-spin-slow drop-shadow-2xl" /> Kino
          </Link>
          <div className="hidden md:flex space-x-10">
            <Link href="/" className="text-gray-200 hover:text-blue-400 font-semibold transition text-lg">Hem</Link>
            <Link href="/movies" className="text-gray-200 hover:text-blue-400 font-semibold transition text-lg">Filmer</Link>
            <Link href="/reviews" className="text-gray-200 hover:text-blue-400 font-semibold transition text-lg">Recensioner</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}