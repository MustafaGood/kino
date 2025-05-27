import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-black text-white mt-16 rounded-t-3xl shadow-2xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <img src="/globe.svg" alt="Kino" className="h-6 w-6" /> Om Kino
            </h3>
            <p className="text-gray-300">Din ultimata destination för filmrecensioner och underhållningsnyheter.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/movies" className="text-gray-300 hover:text-white">
                  Filmer
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-white">
                  Recensioner
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-gray-300 hover:text-white">
                  Nyhetsbrev
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              Email: info@kino.se<br />
              Telefon: +46 123 456 789<br />
              Kattgatan 123, 11122 Filmstaden
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Kino. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white">
              Integritetspolicy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">
              Användarvillkor
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}