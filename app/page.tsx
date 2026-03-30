import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      <div className="mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-24 flex items-center justify-center min-h-screen">
        <div className="text-center space-y-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-2">RSD Polymers</h1>
            <p className="text-lg text-neutral-600">Premium Chemical Polymer Solutions</p>
          </div>

          <p className="text-neutral-600 max-w-md mx-auto">
            Connect with our Sales and Purchase teams. View our chemical polymer products, team details, and company information.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/teams"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors"
            >
              View Teams
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
