import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[var(--kino1)] via-[var(--kino2)] to-[var(--kino3)] shadow-lg py-4 px-8 rounded-b-3xl border-b-4 border-[var(--kino4)]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold text-white drop-shadow-lg tracking-tight">
          <img src="/globe.svg" alt="Kino Logo" className="h-10 w-10 animate-spin-slow drop-shadow-2xl" /> Kino
        </Link>
        <div className="flex gap-8 items-center">
          <Link href="/movies" className="text-white hover:text-[var(--kino4)] font-semibold transition text-lg">Filmer</Link>
          <Link href="/reviews" className="text-white hover:text-[var(--kino5)] font-semibold transition text-lg">Recensioner</Link>
          <Link href="/newsletter" className="text-white hover:text-[var(--kino3)] font-semibold transition text-lg">Nyhetsbrev</Link>
        </div>
      </div>
    </nav>
  );
}