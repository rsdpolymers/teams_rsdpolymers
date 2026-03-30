import Link from 'next/link';
import { MapPin, Briefcase } from 'lucide-react';
import companyData from '@/data/company.json';

export default function TeamsPage() {
  const { company, teams } = companyData;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            RSD Polymers
          </h1>
          <p className="text-lg text-muted-foreground mb-2">Premium Chemical Polymer Solutions</p>
          <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
            {company.website}
          </a>
        </div>

        {/* Company Info */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-card p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-card-foreground mb-1">Head Office</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{company.headOffice.address}</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-card p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 mb-3">
              <Briefcase className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-bold text-card-foreground mb-1">Factory</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{company.factoryAddress.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Team */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">Sales Team</h2>
          </div>
          <div className="grid gap-4 sm:gap-5">
            {teams.sales.map((member) => (
              <Link
                key={member.id}
                href={`/teams/sales/${member.id}`}
                className="group rounded-2xl bg-card border border-border p-5 sm:p-6 hover:border-blue-400 hover:shadow-lg transition-all active:scale-95"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold text-lg flex-shrink-0">
                    {member.fullName.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-card-foreground group-hover:text-blue-600 transition-colors truncate">
                      {member.fullName}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{member.designation}</p>
                    <div className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                      View Profile <span className="text-lg">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Purchase Team */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-green-600 rounded-full"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground">Purchase Team</h2>
          </div>
          <div className="grid gap-4 sm:gap-5">
            {teams.purchase.map((member) => (
              <Link
                key={member.id}
                href={`/teams/purchase/${member.id}`}
                className="group rounded-2xl bg-card border border-border p-5 sm:p-6 hover:border-green-400 hover:shadow-lg transition-all active:scale-95"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-700 text-white font-bold text-lg flex-shrink-0">
                    {member.fullName.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-card-foreground group-hover:text-green-600 transition-colors truncate">
                      {member.fullName}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{member.designation}</p>
                    <div className="inline-flex items-center gap-1 text-green-600 text-sm font-medium group-hover:gap-2 transition-all">
                      View Profile <span className="text-lg">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
