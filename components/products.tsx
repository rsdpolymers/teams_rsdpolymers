'use client';

interface Product {
  id: number;
  emoji: string;
  name: string;
  specs: string[];
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    emoji: '📱',
    name: 'Premium Device',
    specs: ['6.5" AMOLED Display', '128GB Storage', '48MP Camera'],
  },
  {
    id: 2,
    emoji: '💼',
    name: 'Business Suite',
    specs: ['Cloud Integration', 'Enterprise Security', '24/7 Support'],
  },
];

export function Products() {
  const handleDownloadBrochure = (productName: string) => {
    console.log(`[v0] Download brochure for ${productName}`);
    // In a real app, this would trigger a file download
    alert(`Downloading brochure for ${productName}`);
  };

  return (
    <div className="rounded-2xl bg-white p-7 shadow-sm border border-neutral-100">
      <h2 className="mb-4 text-lg font-bold text-neutral-900">
        Featured Products
      </h2>
      <div className="space-y-4">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl bg-white border border-neutral-100 p-4 transition-all hover:shadow-md hover:-translate-y-1"
          >
            <div className="flex gap-3.5 mb-3.5">
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-400 to-neutral-500 text-2xl">
                {product.emoji}
              </div>
              <div className="flex-1">
                <h3 className="mb-1.5 text-sm font-bold text-neutral-900">
                  {product.name}
                </h3>
                <ul className="space-y-0.5">
                  {product.specs.map((spec, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-neutral-600 flex items-start gap-2"
                    >
                      <span className="text-neutral-700 font-semibold mt-0.5">
                        ✓
                      </span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              onClick={() => handleDownloadBrochure(product.name)}
              className="w-full rounded-lg bg-neutral-100 px-3 py-2.5 text-xs font-semibold text-neutral-800 border border-neutral-200 transition-all hover:bg-neutral-200"
            >
              Download Brochure
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
