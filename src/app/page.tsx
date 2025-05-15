import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="relative text-center py-16 bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
          <Image src="/globe.svg" alt="3D Globe" width={320} height={320} className="mx-auto animate-spin-slow opacity-60" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">Välkommen till Kino</h1>
        <p className="text-2xl md:text-3xl text-gray-200 font-light mb-4 drop-shadow">Din ultimata destination för filmrecensioner och underhållningsnyheter</p>
        <div className="flex justify-center gap-6 mt-8">
          <a href="/movies" className="px-8 py-3 btn-3d text-lg font-semibold shadow-lg transition">Utforska Filmer</a>
          <a href="/newsletter" className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full text-lg font-semibold border border-white text-white transition">Nyhetsbrev</a>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-8 bg-white/90 card-3d">
          <h2 className="text-2xl font-bold mb-3 text-blue-900 flex items-center gap-2">
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
