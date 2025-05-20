import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[var(--kino3)] via-[var(--kino2)] to-[var(--kino1)] text-white mt-16 rounded-t-3xl shadow-2xl border-t-4 border-[var(--kino4)] backdrop-blur-md">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 drop-shadow-lg">
              <img src="/globe.svg" alt="Kino" className="h-8 w-8 animate-spin-slow" /> Om Kino
            </h3>
            <p className="text-lg text-white/90">Din ultimata destination för filmrecensioner och underhållningsnyheter.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 drop-shadow-lg">Snabblänkar</h3>
            <ul className="space-y-2">
              <li><Link href="/movies" className="text-white hover:text-[var(--kino4)] transition text-lg">Filmer</Link></li>
              <li><Link href="/reviews" className="text-white hover:text-[var(--kino5)] transition text-lg">Recensioner</Link></li>
              <li><Link href="/newsletter" className="text-white hover:text-[var(--kino3)] transition text-lg">Nyhetsbrev</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 drop-shadow-lg">Kontakt</h3>
            <p className="text-lg text-white/90">E-post: kontakt@kino.com<br />Följ oss på sociala medier</p>
            <div className="flex gap-4 mt-3">
              <a href="#" className="hover:scale-110 transition"><img src="/globe.svg" alt="Socialt nätverk" className="h-8 w-8" /></a>
              <a href="#" className="hover:scale-110 transition"><img src="/window.svg" alt="Socialt nätverk" className="h-8 w-8" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/30 mt-12 pt-8 text-center text-white/70">
          <p className="text-lg">&copy; {new Date().getFullYear()} Kino. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}