'use client';

import { use } from 'react';
import Link from 'next/link';
import { Phone, Mail, Globe, Download } from 'lucide-react';
import companyData from '@/data/company.json';

export default function SalesPersonPage({ params }: { params: Promise<{ person: string }> }) {
  const { person: personId } = use(params);
  const person = companyData.teams.sales.find((p) => p.id === personId);
  const products = companyData.products;

  if (!person) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-muted-foreground text-lg mb-4">Person not found</p>
          <Link href="/teams" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
            Back to Teams
          </Link>
        </div>
      </main>
    );
  }

  const displayedProducts = products.slice(0, 2);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-10">
        {/* Back Button */}
        <Link href="/teams" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold mb-6 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Back to Teams</span>
        </Link>

        {/* Profile Card */}
        <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-sm mb-8">
          <div className="flex gap-5 mb-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold text-4xl flex-shrink-0">
              {person.fullName.charAt(0)}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-1">{person.fullName}</h1>
              <p className="text-lg text-muted-foreground">{person.designation}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 border-t border-border pt-6">
            <a href={`tel:${person.phoneNumber}`} className="flex items-center gap-3 text-muted-foreground hover:text-blue-600 transition-colors group">
              <Phone size={20} className="text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Phone</p>
                <p className="text-card-foreground font-semibold">{person.phoneNumber}</p>
              </div>
            </a>
            <a href={`mailto:${person.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-blue-600 transition-colors group">
              <Mail size={20} className="text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
                <p className="text-card-foreground font-semibold">{person.email}</p>
              </div>
            </a>
            <a href={`https://${person.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-blue-600 transition-colors group">
              <Globe size={20} className="text-blue-600 flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Website</p>
                <p className="text-card-foreground font-semibold">{person.website}</p>
              </div>
            </a>
          </div>
        </div>

        {/* Products Section */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">Chemical Polymers</h2>
          </div>
          <div className="space-y-4">
            {displayedProducts.map((product) => (
              <div key={product.id} className="group rounded-2xl bg-card border border-border p-5 sm:p-6 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-card-foreground mb-1 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.type}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{product.description}</p>
                </div>

                <div className="mb-6 bg-muted rounded-xl p-4">
                  <ul className="space-y-2.5">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-card-foreground">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 font-bold flex-shrink-0 text-xs mt-0.5">✓</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => window.open(product.brochure)}
                  className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Download size={18} />
                  Download Brochure
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
