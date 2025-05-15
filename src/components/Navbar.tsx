import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Kino
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/movies" className="text-gray-600 hover:text-gray-900">
              Movies
            </Link>
            <Link href="/reviews" className="text-gray-600 hover:text-gray-900">
              Reviews
            </Link>
            <Link href="/newsletter" className="text-gray-600 hover:text-gray-900">
              Newsletter
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              Om oss
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Kontakt
            </Link>
          </div>

          <div className="md:hidden">
            {/* Mobile menu button - to be implemented */}
            <button className="text-gray-600 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 