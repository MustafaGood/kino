import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Kino</h1>
        <p className="text-xl text-gray-600">
          Your ultimate destination for movie reviews and entertainment news
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Latest Reviews</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Featured Movies</h2>
          <p className="text-gray-600">Coming soon...</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
          <p className="text-gray-600">Subscribe to our newsletter for updates</p>
        </div>
      </section>
    </div>
  );
}
