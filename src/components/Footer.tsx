import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-black text-white mt-16 rounded-t-3xl shadow-2xl border-t-2 border-blue-700/40 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 drop-shadow-lg">
              <img src="/globe.svg" alt="Kino" className="h-8 w-8 animate-spin-slow" /> Om Kino
            </h3>
            <p className="text-gray-300 text-lg">Din ultimata destination för filmrecensioner och underhållningsnyheter.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 drop-shadow-lg">Snabblänkar</h3>
            <ul className="space-y-2">
              <li><Link href="/movies" className="text-gray-300 hover:text-blue-400 transition text-lg">Filmer</Link></li>
              <li><Link href="/reviews" className="text-gray-300 hover:text-blue-400 transition text-lg">Recensioner</Link></li>
              <li><Link href="/newsletter" className="text-gray-300 hover:text-blue-400 transition text-lg">Nyhetsbrev</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 drop-shadow-lg">Kontakt</h3>
            <p className="text-gray-300 text-lg">E-post: kontakt@kino.com<br />Följ oss på sociala medier</p>
            <div className="flex gap-4 mt-3">
              <a href="#" className="hover:scale-110 transition"><img src="/globe.svg" alt="Socialt nätverk" className="h-8 w-8" /></a>
              <a href="#" className="hover:scale-110 transition"><img src="/window.svg" alt="Socialt nätverk" className="h-8 w-8" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p className="text-lg">&copy; {new Date().getFullYear()} Kino. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}