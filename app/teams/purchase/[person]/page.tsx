'use client';

import { use } from 'react';
import Link from 'next/link';
import { Phone, Mail, Globe } from 'lucide-react';
import companyData from '@/data/company.json';

export default function PurchasePersonPage({ params }: { params: Promise<{ person: string }> }) {
  const { person: personId } = use(params);
  const person = companyData.teams.purchase.find((p) => p.id === personId);
  const { company } = companyData;

  if (!person) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-muted-foreground text-lg mb-4">Person not found</p>
          <Link href="/teams" className="text-green-600 hover:text-green-700 font-semibold transition-colors">
            Back to Teams
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-10">
        {/* Back Button */}
        <Link href="/teams" className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-semibold mb-6 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Back to Teams</span>
        </Link>

        {/* Profile Card */}
        <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-sm mb-8">
          <div className="flex gap-5 mb-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white font-bold text-4xl flex-shrink-0">
              {person.fullName.charAt(0)}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-1">{person.fullName}</h1>
              <p className="text-lg text-muted-foreground">{person.designation}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 border-t border-border pt-6">
            <a href={`tel:${person.phoneNumber}`} className="flex items-center gap-3 text-muted-foreground hover:text-green-600 transition-colors group">
              <Phone size={20} className="text-green-600 flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Phone</p>
                <p className="text-card-foreground font-semibold">{person.phoneNumber}</p>
              </div>
            </a>
            <a href={`mailto:${person.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-green-600 transition-colors group">
              <Mail size={20} className="text-green-600 flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Email</p>
                <p className="text-card-foreground font-semibold">{person.email}</p>
              </div>
            </a>
            <a href={`https://${person.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-green-600 transition-colors group">
              <Globe size={20} className="text-green-600 flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Website</p>
                <p className="text-card-foreground font-semibold">{person.website}</p>
              </div>
            </a>
          </div>
        </div>

        {/* Company Information */}
        <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-green-600 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">Company Info</h2>
          </div>
          <div className="space-y-5">
            <div className="pb-5 border-b border-border last:border-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2 font-semibold">Website</p>
              <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-semibold transition-colors break-all">
                {company.website}
              </a>
            </div>
            <div className="pb-5 border-b border-border last:border-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2 font-semibold">Head Office</p>
              <p className="text-card-foreground leading-relaxed">{company.headOffice.address}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2 font-semibold">Factory Address</p>
              <p className="text-card-foreground leading-relaxed">{company.factoryAddress.address}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
