export type DocCategory = {
  name: string;
  count: number;
  docs: DocRecord[];
};

export type DocRecord = {
  slug: string;
  title: string;
  path: string;
  type: string;
  updated: string;
  summary: string;
  category: string;
};

export const docCategories: DocCategory[] = [
  {
    name: "Profiles and retained context",
    count: 3,
    docs: [
      {
        slug: "canonical-profile-debbie-and-urban-events",
        title: "Canonical Profile, Debbie and Urban Events",
        path: "canonical-profile-debbie-and-urban-events.md",
        type: "Profile",
        updated: "2026-04-21",
        summary: "Working profile for future strategy, drafting, and operational support.",
        category: "Profiles and retained context",
      },
      {
        slug: "retained-context-debbie-2026-04-21",
        title: "Retained Context, Debbie",
        path: "retained-context-debbie-2026-04-21.md",
        type: "Retained context",
        updated: "2026-04-21",
        summary: "Captured context intended to preserve important business and operator detail.",
        category: "Profiles and retained context",
      },
      {
        slug: "interview-gap-list-2026-04-21",
        title: "Interview Gap List",
        path: "interview-gap-list-2026-04-21.md",
        type: "Research",
        updated: "2026-04-21",
        summary: "Identifies missing source material and context gaps from the Debbie interview process.",
        category: "Profiles and retained context",
      },
    ],
  },
  {
    name: "Legal and dispute work",
    count: 2,
    docs: [
      {
        slug: "legal-battle-gazecki-dossier",
        title: "Janek Gazecki / John Christopher Gazecki Research Dossier",
        path: "legal-battle-gazecki-dossier.md",
        type: "Legal dossier",
        updated: "2026-04-21",
        summary: "Public-source starter dossier for litigation and related dispute monitoring.",
        category: "Legal and dispute work",
      },
      {
        slug: "litigation-brief-f3-v-polo",
        title: "Litigation Brief, F3 v Polo",
        path: "litigation_brief_f3_v_polo.md",
        type: "Legal brief",
        updated: "2026-04-20",
        summary: "Working brief tied to the F3 Polo legal matter.",
        category: "Legal and dispute work",
      },
    ],
  },
  {
    name: "Supplier and operations data",
    count: 8,
    docs: [
      {
        slug: "brisbane-marquee-companies",
        title: "Brisbane marquee companies",
        path: "brisbane-marquee-companies.csv",
        type: "Supplier list",
        updated: "2026-04-20",
        summary: "Supplier comparison source list for marquee infrastructure in Brisbane.",
        category: "Supplier and operations data",
      },
      {
        slug: "brisbane-fencing-companies",
        title: "Brisbane fencing companies",
        path: "brisbane-fencing-companies.csv",
        type: "Supplier list",
        updated: "2026-04-20",
        summary: "Fencing supplier market scan for Brisbane event planning.",
        category: "Supplier and operations data",
      },
      {
        slug: "brisbane-luxury-toilets",
        title: "Brisbane luxury toilets",
        path: "brisbane-luxury-toilets.csv",
        type: "Supplier list",
        updated: "2026-04-20",
        summary: "Premium amenities supplier list for Brisbane event infrastructure.",
        category: "Supplier and operations data",
      },
      {
        slug: "brisbane-traffic-management-companies",
        title: "Brisbane traffic management companies",
        path: "brisbane-traffic-management-companies.csv",
        type: "Supplier list",
        updated: "2026-04-20",
        summary: "Traffic management options for Brisbane event delivery.",
        category: "Supplier and operations data",
      },
      {
        slug: "brisbane-waste-management-companies",
        title: "Brisbane waste management companies",
        path: "brisbane-waste-management-companies.csv",
        type: "Supplier list",
        updated: "2026-04-20",
        summary: "Waste management supplier scan for Brisbane operations.",
        category: "Supplier and operations data",
      },
      {
        slug: "portsea-contacts-merged",
        title: "Portsea contacts merged",
        path: "output/portsea_contacts_merged.xlsx",
        type: "Spreadsheet",
        updated: "2026-04-20",
        summary: "Merged contact workbook for Portsea-related supplier and contact data.",
        category: "Supplier and operations data",
      },
      {
        slug: "key-contacts-suppliers-all-markets-merged",
        title: "Key Contacts + Suppliers All Markets, merged",
        path: "output/Key Contacts + Suppliers All Markets - Portsea tab merged with cities, filters, and table.xlsx",
        type: "Spreadsheet",
        updated: "2026-04-20",
        summary: "Expanded operations workbook with merged city tabs, filters, and structured table view.",
        category: "Supplier and operations data",
      },
      {
        slug: "paid-invoices-register",
        title: "Paid invoices register",
        path: "output/paid_invoices_register.csv",
        type: "Finance data",
        updated: "2026-04-20",
        summary: "Register view of paid invoice data for tracking and reconciliation.",
        category: "Supplier and operations data",
      },
    ],
  },
  {
    name: "System and memory docs",
    count: 5,
    docs: [
      {
        slug: "memory-md",
        title: "Long-term memory",
        path: "MEMORY.md",
        type: "Memory",
        updated: "2026-04-20",
        summary: "Curated long-term memory for business context, preferences, and retained strategic guidance.",
        category: "System and memory docs",
      },
      {
        slug: "memory-2026-04-20",
        title: "Daily memory, 2026-04-20",
        path: "memory/2026-04-20.md",
        type: "Daily memory",
        updated: "2026-04-20",
        summary: "Day-based memory log including the canonical Debbie business context interview.",
        category: "System and memory docs",
      },
      {
        slug: "user-md",
        title: "USER.md",
        path: "USER.md",
        type: "System doc",
        updated: "2026-04-20",
        summary: "User and stakeholder context for Debbie, Simon, and Sam.",
        category: "System and memory docs",
      },
      {
        slug: "identity-md",
        title: "IDENTITY.md",
        path: "IDENTITY.md",
        type: "System doc",
        updated: "2026-04-21",
        summary: "Assistant identity, role, and commercial positioning.",
        category: "System and memory docs",
      },
      {
        slug: "soul-md",
        title: "SOUL.md",
        path: "SOUL.md",
        type: "System doc",
        updated: "2026-04-20",
        summary: "Core behavioural guidance shaping how the assistant works.",
        category: "System and memory docs",
      },
    ],
  },
];

export const allDocs = docCategories.flatMap((category) => category.docs);

export function getDocBySlug(slug: string) {
  return allDocs.find((doc) => doc.slug === slug);
}

export function getDocDownloadHref(doc: DocRecord) {
  return `/api/docs/${doc.slug}/download`;
}
