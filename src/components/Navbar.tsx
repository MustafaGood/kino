import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 via-gray-900 to-black shadow-lg py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold text-white tracking-wide drop-shadow">
            <img src="/globe.svg" alt="Kino Logo" className="h-8 w-8 animate-spin-slow" /> Kino
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-200 hover:text-white font-medium transition">
              Hem
            </Link>
            <Link href="/movies" className="text-gray-200 hover:text-white font-medium transition">
              Filmer
            </Link>
            <Link href="/reviews" className="text-gray-200 hover:text-white font-medium transition">
              Recensioner
            </Link>
            <Link href="/newsletter" className="text-gray-200 hover:text-white font-medium transition">
              Nyhetsbrev
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              Om oss
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Kontakt
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-gray-200 hover:text-white">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}