import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Lägg till specialeffekt Kino-section överst på sidan */}
      <section className="flex items-center justify-center min-h-[60vh]">
        <div className="content relative">
          <h2 className="kino-outline">Kino</h2>
          <h2 className="kino-animated">Kino</h2>
        </div>
      </section>

      <section className="py-24 text-center bg-gradient-to-br from-[var(--kino1)] via-[var(--kino2)] to-[var(--kino3)] rounded-3xl shadow-2xl mb-16 border-4 border-[var(--kino4)]">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg">Välkommen till Kino</h1>
        <p className="text-2xl md:text-3xl text-white/90 mb-10 font-medium">Din plats för filmrecensioner och underhållningsnyheter</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="/movies" className="px-8 py-3 btn-3d text-lg font-semibold shadow-lg transition">Utforska Filmer</a>
          <a href="/newsletter" className="px-8 py-3 bg-[var(--kino3)] hover:bg-[var(--kino4)] rounded-full text-lg font-semibold border border-white text-white transition">Nyhetsbrev</a>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-8 bg-white/90 card-3d border-l-8 border-[var(--kino5)]">
          <h2 className="text-2xl font-bold mb-3 text-[var(--kino1)] flex items-center gap-2">
            <Image src="/file.svg" alt="Recension" width={28} height={28} />
            Senaste recensioner
          </h2>
          <p className="text-gray-700">Kommer snart...</p>
        </div>

        <div className="p-8 bg-white/90 card-3d">
          <h2 className="text-2xl font-bold mb-3 text-blue-900 flex items-center gap-2">
            <Image src="/window.svg" alt="Utvalda filmer" width={28} height={28} />
            Utvalda filmer
          </h2>
          <p className="text-gray-700">Kommer snart...</p>
        </div>

        <div className="p-8 bg-white/90 card-3d">
          <h2 className="text-2xl font-bold mb-3 text-blue-900 flex items-center gap-2">
            <Image src="/vercel.svg" alt="Nyhetsbrev" width={28} height={28} />
            Nyhetsbrev
          </h2>
          <p className="text-gray-700">Prenumerera på vårt nyhetsbrev för uppdateringar</p>
        </div>
      </section>
    </div>
  );
}
