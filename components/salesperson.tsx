'use client';

export function Salesperson() {
  return (
    <div className="rounded-2xl bg-white p-7 shadow-sm border border-neutral-100">
      <div className="text-center">
        <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-neutral-700 to-neutral-500 text-3xl font-bold text-white">
          JA
        </div>
        <h1 className="mb-1.5 text-2xl font-bold text-neutral-900">
          John Anderson
        </h1>
        <p className="mb-6 text-sm font-medium text-neutral-600 tracking-wide">
          Senior Sales Executive
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="tel:+1234567890"
            className="flex-1 min-w-32 rounded-lg bg-neutral-800 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-neutral-900 hover:-translate-y-0.5"
          >
            Call
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-32 rounded-lg bg-neutral-100 px-5 py-3 text-sm font-semibold text-neutral-800 border border-neutral-200 transition-all hover:bg-neutral-200 hover:-translate-y-0.5"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
