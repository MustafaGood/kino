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
              <li><Link href="/movies" className="text-gray-300 hover:text-white transition">Filmer</Link></li>
              <li><Link href="/reviews" className="text-gray-300 hover:text-white transition">Recensioner</Link></li>
              <li><Link href="/newsletter" className="text-gray-300 hover:text-white transition">Nyhetsbrev</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <p className="text-gray-300">E-post: kontakt@kino.com<br />Följ oss på sociala medier</p>
            <div className="flex gap-4 mt-3">
              <a href="#" className="hover:scale-110 transition"><img src="/globe.svg" alt="Social" className="h-6 w-6" /></a>
              <a href="#" className="hover:scale-110 transition"><img src="/window.svg" alt="Social" className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kino. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}