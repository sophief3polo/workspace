type TicketLine = {
  label: string;
  sold: string;
  faceValue: string;
  holdQty: string;
  holdValue: string;
  note: string;
};

type PreviousEventLine = {
  label: string;
  sold: string;
  scanned: string;
  showUpRate: string;
};

export type CityCard = {
  season: string;
  city: string;
  date: string;
  venue: string;
  ticketsSold: string;
  faceValue: string;
  holdQty: string;
  holdValue: string;
  lastUpdated: string;
  headline: string;
  detail: string;
  lines: TicketLine[];
  previousEvent?: {
    label: string;
    sold: string;
    scanned: string;
    showUpRate: string;
    detail: string;
    lines: PreviousEventLine[];
    footnote?: string;
  };
};

export type TicketingPageData = {
  scoreboard: { label: string; value: string }[];
  eventSheetLinks: { label: string; href: string }[];
  cityCards: CityCard[];
  sourceMode: "live" | "fallback";
  sourceNote?: string;
};

type CityConfig = Omit<CityCard, "ticketsSold" | "faceValue" | "holdQty" | "holdValue" | "lastUpdated" | "lines"> & {
  brand: "f3" | "urban";
  lines: Array<{
    label: string;
    eventId: string;
    eventTitle: string;
  }>;
};

type BrandConfig = {
  apiUrl: string;
  adminOrigin: string;
  orgId: string;
  cookieEnv: string;
  emailEnv: string;
  passwordEnv: string;
};

type OrderNode = {
  event?: { title?: string | null } | null;
  tickets?: Array<{
    id: string;
    lineItem?: {
      id: string;
      quantity?: number | null;
      price?: number | null;
    } | null;
  }> | null;
};

type EventSummaryNode = {
  title?: string | null;
  soldTicketsCount?: number | null;
  totalFaceValue?: number | null;
};

const cityConfigs: CityConfig[] = [
  {
    season: "2026",
    city: "Sydney",
    date: "14 Nov 2026",
    venue: "Mission Field, Centennial Parklands",
    headline: "Sydney has live sales and serious held volume now.",
    detail: "Ticket numbers now come straight from Flicket orders at runtime, so they move without page edits or redeploys.",
    brand: "f3",
    previousEvent: {
      label: "Sydney 2025 history",
      sold: "2,073",
      scanned: "1,713",
      showUpRate: "82.6%",
      detail: "Pulled from the History All Sales and Scanned In sheet linked in Mission Control.",
      lines: [
        { label: "Marquee", sold: "623", scanned: "536", showUpRate: "86.0%" },
        { label: "VIP", sold: "647", scanned: "596", showUpRate: "92.1%" },
        { label: "Polo Lawn", sold: "803", scanned: "581", showUpRate: "72.4%" },
      ],
    },
    lines: [
      { label: "GA", eventId: "9d995ad4-3132-43b6-85c0-bd4bf3de11a6", eventTitle: "F3 Polo Sydney 2026 - Heineken Polo Lawn" },
      { label: "VIP", eventId: "63b67015-54b3-4c64-a61b-495c43d571f5", eventTitle: "F3 Polo Sydney 2026 - VIP Terrace" },
      { label: "Marquees", eventId: "80fac8ef-8b2d-4333-803c-244c693faa61", eventTitle: "F3 Polo Sydney 2026 - Private Marquees" },
      { label: "Sportscraft Polo Lounge", eventId: "c6697eb4-4802-49c5-90bf-bbab6d9fb178", eventTitle: "F3 Polo Sydney 2026 : Sportscraft F3 Polo Lounge" },
    ],
  },
  {
    season: "2026",
    city: "Brisbane",
    date: "31 Oct 2026",
    venue: "Dorrington Park (Kallindarbin), Ashgrove",
    headline: "Set up and ready to track.",
    detail: "This board refreshes from Flicket on every request, even when the event is quiet.",
    brand: "f3",
    lines: [
      { label: "GA", eventId: "e0bdf2c3-6a43-40b9-a7d3-a0bb871e09ce", eventTitle: "F3 Polo Brisbane 2026 - Heineken Polo Lawn" },
      { label: "VIP", eventId: "a1a1bba7-39cb-4768-bf6f-25ca4a0b4967", eventTitle: "F3 Polo Brisbane 2026 - VIP Champagne Terrace" },
      { label: "Marquees", eventId: "2af0644a-3231-4865-a086-419dcf659aa5", eventTitle: "F3 Polo Brisbane 2026 - Private Marquees" },
      { label: "Sportscraft Polo Lounge", eventId: "043b7a1f-9756-4e62-9278-6d455374a291", eventTitle: "F3 Polo Brisbane 2026 : Sportscraft F3 Polo Lounge" },
    ],
  },
  {
    season: "2027",
    city: "Christchurch",
    date: "20 Feb 2027",
    venue: "Hagley Park, Christchurch",
    headline: "Christchurch is already carrying weight.",
    detail: "Christchurch is wired for live Flicket reads instead of static numbers.",
    brand: "urban",
    lines: [
      { label: "GA", eventId: "9bd13a3d-fe7c-4f91-a283-0965a470d4ed", eventTitle: "Peroni Polo Lawn General Admission - Christchurch 2027" },
      { label: "VIP", eventId: "8e19853f-97a6-49e8-af16-2b99b0844ac2", eventTitle: "VIP Champagne Terrace - Christchurch 2027" },
      { label: "Marquees", eventId: "58fcf839-7b30-4b40-9462-578319e9ed04", eventTitle: "Private Marquees - Christchurch 2027" },
      { label: "Urban Polo Lounge", eventId: "b783f10a-e454-4b62-aac0-f126084a9e30", eventTitle: '"Urban Polo Lounge" Private Marquee Area - Christchurch 2027' },
    ],
  },
  {
    season: "2027",
    city: "Auckland",
    date: "6 Mar 2027",
    venue: "Lexus Urban Polo - Auckland",
    headline: "Auckland is the strongest board right now.",
    detail: "Auckland is set to read straight from Flicket at runtime too.",
    brand: "urban",
    lines: [
      { label: "GA", eventId: "fbbd40a4-bdaa-41ed-b502-07d7521ae5e4", eventTitle: "Peroni Polo Lawn  General Admission - Auckland 2027" },
      { label: "VIP", eventId: "ff6b2d8d-6cc2-42a7-a405-35d24a8486ab", eventTitle: "VIP Champagne Terrace - Auckland 2027" },
      { label: "Marquees", eventId: "b9a6073a-e387-42bf-8f9c-e7ae9c39ab9b", eventTitle: "Private Marquees - Auckland 2027" },
      { label: "Urban Polo Lounge", eventId: "dd8b2119-b7e0-44ef-8ea4-31978caae1d1", eventTitle: '"Urban Polo Lounge" Private Marquee Area - Auckland 2027' },
    ],
  },
];

const eventSheetLinks = [
  {
    label: "History All Sales and Scanned In Data",
    href: "https://docs.google.com/spreadsheets/d/1PbBiWBZH9c3tG4cB-M5xBiUwEC6a7o-01E3YyHyD4fc/edit",
  },
  {
    label: "Sydney 2026",
    href: "https://docs.google.com/spreadsheets/d/1Gkl14hPWw1IXaXk3At-1gzNXeajqI7OBVdobOOwoXBo/edit",
  },
  {
    label: "Brisbane 2026",
    href: "https://docs.google.com/spreadsheets/d/1HU5TZMOo85phVNvvkvcesYRQ9ogqHKJsL1s-ItXiqRc/edit",
  },
  {
    label: "Christchurch 2027",
    href: "https://docs.google.com/spreadsheets/d/1LUl31_WAyX0XAoh691AOrZs-g6jCLuKX2cjLCES4eIE/edit",
  },
  {
    label: "Auckland 2027",
    href: "https://docs.google.com/spreadsheets/d/1CYKjQjuIH8X28w6uNI9xkPMq245rFgkq5IjjcjuiJbs/edit",
  },
] as const;

const brandConfigs: Record<CityConfig["brand"], BrandConfig> = {
  f3: {
    apiUrl: "https://api.flicket.io/graphql",
    adminOrigin: "https://admin.f3polo.flicket.io",
    orgId: "71508fa5-ed17-4d3d-933c-02afc931163c",
    cookieEnv: "FLICKET_F3_COOKIE",
    emailEnv: "FLICKET_F3_EMAIL",
    passwordEnv: "FLICKET_F3_PASSWORD",
  },
  urban: {
    apiUrl: "https://api.flicket.co.nz/graphql",
    adminOrigin: "https://admin.urbanpolo.flicket.co.nz",
    orgId: "aac14032-ac60-4970-b282-59d9f828d8a3",
    cookieEnv: "FLICKET_URBAN_COOKIE",
    emailEnv: "FLICKET_URBAN_EMAIL",
    passwordEnv: "FLICKET_URBAN_PASSWORD",
  },
};

const fallbackData: TicketingPageData = {
  scoreboard: [
    { label: "Cities live", value: "4" },
    { label: "Event lines", value: "16" },
    { label: "Tickets sold", value: "423" },
    { label: "Face value tracked", value: "$193,021.20" },
  ],
  eventSheetLinks: [...eventSheetLinks],
  sourceMode: "fallback",
  sourceNote: "Live Flicket credentials are not configured for every board yet, so this page is showing the last captured snapshot.",
  cityCards: [
    {
      season: "2026",
      city: "Sydney",
      date: "14 Nov 2026",
      venue: "Mission Field, Centennial Parklands",
      ticketsSold: "35",
      faceValue: "$10,146.20",
      holdQty: "314",
      holdValue: "$167,167.69",
      lastUpdated: "06 May 2026 04:04 PM NZST",
      headline: "Sydney has live sales and serious held volume now.",
      detail: "The Polo Lawn hold is the gap we just caught. VIP Platinum and private marquees are also sitting in holds alongside live sold revenue.",
      lines: [
        { label: "GA", sold: "13", faceValue: "$1,320.00", holdQty: "94", holdValue: "$8,836.00", note: "1 hold order" },
        { label: "VIP", sold: "16", faceValue: "$4,304.00", holdQty: "20", holdValue: "$7,700.00", note: "Includes VIP Platinum hold" },
        { label: "Marquees", sold: "0", faceValue: "$0.00", holdQty: "200", holdValue: "$150,631.69", note: "0 sold • 4 on hold" },
        { label: "Sportscraft Polo Lounge", sold: "6", faceValue: "$4,522.20", holdQty: "0", holdValue: "$0.00", note: "No lounge holds" },
      ],
      previousEvent: cityConfigs[0].previousEvent,
    },
    {
      season: "2026",
      city: "Brisbane",
      date: "31 Oct 2026",
      venue: "Dorrington Park (Kallindarbin), Ashgrove",
      ticketsSold: "0",
      faceValue: "$0.00",
      holdQty: "0",
      holdValue: "$0.00",
      lastUpdated: "05 May 2026 04:48 PM NZST",
      headline: "Set up and ready to track.",
      detail: "Brisbane is wired in and clean, with no ticket or hold activity yet.",
      lines: [
        { label: "GA", sold: "0", faceValue: "$0.00", holdQty: "0", holdValue: "$0.00", note: "No activity yet" },
        { label: "VIP", sold: "0", faceValue: "$0.00", holdQty: "0", holdValue: "$0.00", note: "No activity yet" },
        { label: "Marquees", sold: "0", faceValue: "$0.00", holdQty: "0", holdValue: "$0.00", note: "0 sold • 0 on hold" },
        { label: "Sportscraft Polo Lounge", sold: "0", faceValue: "$0.00", holdQty: "0", holdValue: "$0.00", note: "No activity yet" },
      ],
    },
    {
      season: "2027",
      city: "Christchurch",
      date: "20 Feb 2027",
      venue: "Hagley Park, Christchurch",
      ticketsSold: "123",
      faceValue: "$56,674.00",
      holdQty: "0",
      holdValue: "$0.00",
      lastUpdated: "05 May 2026 04:48 PM NZST",
      headline: "Christchurch is already carrying weight.",
      detail: "Private marquees are doing the heavy lifting, with VIP also showing early traction.",
      lines: [
        { label: "GA", sold: "3", faceValue: "$207.00", holdQty: "0", holdValue: "$0.00", note: "No holds" },
        { label: "VIP", sold: "20", faceValue: "$5,460.00", holdQty: "0", holdValue: "$0.00", note: "No holds" },
        { label: "Marquees", sold: "100", faceValue: "$51,007.00", holdQty: "0", holdValue: "$0.00", note: "3 sold • 0 on hold" },
        { label: "Urban Polo Lounge", sold: "0", faceValue: "$0.00", holdQty: "0", holdValue: "$0.00", note: "No activity yet" },
      ],
    },
    {
      season: "2027",
      city: "Auckland",
      date: "6 Mar 2027",
      venue: "Lexus Urban Polo - Auckland",
      ticketsSold: "265",
      faceValue: "$126,201.00",
      holdQty: "0",
      holdValue: "$0.00",
      lastUpdated: "05 May 2026 04:48 PM NZST",
      headline: "Auckland is the strongest board right now.",
      detail: "Private marquees are dominating revenue, with VIP and lawn sales adding early proof of demand.",
      lines: [
        { label: "GA", sold: "5", faceValue: "$276.00", holdQty: "0", holdValue: "$0.00", note: "No holds" },
        { label: "VIP", sold: "10", faceValue: "$3,360.00", holdQty: "0", holdValue: "$0.00", note: "No holds" },
        { label: "Marquees", sold: "250", faceValue: "$122,565.00", holdQty: "0", holdValue: "$0.00", note: "5 sold • 0 on hold" },
        { label: "Urban Polo Lounge", sold: "0", faceValue: "$0.00", holdQty: "0", holdValue: "$0.00", note: "No activity yet" },
      ],
    },
  ],
};

function formatInteger(value: number) {
  return new Intl.NumberFormat("en-NZ").format(value);
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-NZ", {
    style: "currency",
    currency: "NZD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(value)
    .replace("NZ$", "$");
}

function formatTimestamp(date = new Date()) {
  return new Intl.DateTimeFormat("en-NZ", {
    timeZone: "Pacific/Auckland",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })
    .format(date)
    .replace(/,/g, "")
    .replace(/am/i, "AM")
    .replace(/pm/i, "PM")
    .concat(" NZST");
}

function buildNote(sold: number, holdQty: number) {
  if (sold > 0 && holdQty > 0) return `${formatInteger(sold)} sold • ${formatInteger(holdQty)} on hold`;
  if (holdQty > 0) return `${formatInteger(holdQty)} on hold`;
  if (sold > 0) return `${formatInteger(sold)} sold • no holds`;
  return "No activity yet";
}

function normalizeCookie(value: string) {
  return value.includes("=") ? value : `flicket-Control=${value}`;
}

const LOGIN_MUTATION = "mutation login($input: LoginInput!) { login(input: $input) { id } }";
const cookieCache = new Map<CityConfig["brand"], string>();

type FlicketPayload<T> = {
  data?: T;
  errors?: Array<{ message: string; extensions?: { code?: string } }>;
};

type CookieResolution = {
  cookieHeader: string | null;
  source: "env" | "cache" | "login" | "missing";
};

function extractSetCookies(response: Response) {
  const getSetCookie = response.headers.getSetCookie as undefined | (() => string[]);
  if (typeof getSetCookie === "function") {
    return getSetCookie().filter(Boolean);
  }

  const combined = response.headers.get("set-cookie");
  if (!combined) return [];

  return combined
    .split(/,(?=[^;,]+=)/g)
    .map((value) => value.trim())
    .filter(Boolean);
}

async function loginWithPassword(brandKey: CityConfig["brand"]) {
  const brand = brandConfigs[brandKey];
  const email = process.env[brand.emailEnv];
  const password = process.env[brand.passwordEnv];

  if (!email || !password) return null;

  const response = await fetch(brand.apiUrl, {
    method: "POST",
    cache: "no-store",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      origin: brand.adminOrigin,
      referer: `${brand.adminOrigin}/login?type=password`,
      "flicket-environment": "admin",
      "flicket-org-id": brand.orgId,
    },
    body: JSON.stringify({
      operationName: "login",
      query: LOGIN_MUTATION,
      variables: { input: { email, password } },
    }),
  });

  const payload = (await response.json().catch(() => null)) as FlicketPayload<{ login?: { id?: string | null } }> | null;
  const setCookies = extractSetCookies(response);

  if (!response.ok || setCookies.length === 0) {
    const detail = payload?.errors?.map((error) => error.message).filter(Boolean).join("; ");
    throw new Error(detail ? `Flicket login failed for ${brand.orgId}: ${detail}` : `Flicket login failed for ${brand.orgId}`);
  }

  const cookieHeader = setCookies.map((value) => value.split(";")[0].trim()).join("; ");
  cookieCache.set(brandKey, cookieHeader);
  return cookieHeader;
}

async function resolveCookieHeader(brandKey: CityConfig["brand"], forceRefresh = false): Promise<CookieResolution> {
  const brand = brandConfigs[brandKey];
  const envCookie = process.env[brand.cookieEnv];

  if (!forceRefresh && envCookie) {
    return { cookieHeader: normalizeCookie(envCookie), source: "env" };
  }

  const cachedCookie = cookieCache.get(brandKey);
  if (!forceRefresh && cachedCookie) {
    return { cookieHeader: cachedCookie, source: "cache" };
  }

  const loginCookie = await loginWithPassword(brandKey);
  if (loginCookie) {
    return { cookieHeader: loginCookie, source: "login" };
  }

  return { cookieHeader: null, source: "missing" };
}

function shouldRetryWithFreshLogin(payload: FlicketPayload<unknown> | null) {
  return Boolean(
    payload?.errors?.some((error) => {
      const message = error.message.toLowerCase();
      const code = error.extensions?.code?.toLowerCase();
      return code === "unauthenticated" || message.includes("unauthorized") || message.includes("unauthenticated");
    }),
  );
}

async function executeFlicketQuery<T>(
  brandKey: CityConfig["brand"],
  operationName: string,
  query: string,
  variables: Record<string, unknown>,
  cookieHeader: string,
) {
  const brand = brandConfigs[brandKey];
  const response = await fetch(brand.apiUrl, {
    method: "POST",
    cache: "no-store",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      cookie: cookieHeader,
      origin: brand.adminOrigin,
      referer: `${brand.adminOrigin}/`,
      "flicket-environment": "admin",
      "flicket-org-id": brand.orgId,
    },
    body: JSON.stringify({ operationName, query, variables }),
  });

  const payload = (await response.json()) as FlicketPayload<T>;
  return { response, payload };
}

async function flicketQuery<T>(
  brandKey: CityConfig["brand"],
  operationName: string,
  query: string,
  variables: Record<string, unknown>,
) {
  const initial = await resolveCookieHeader(brandKey);
  if (!initial.cookieHeader) {
    throw new Error(`Missing Flicket credentials for ${brandKey}`);
  }

  let { payload } = await executeFlicketQuery<T>(brandKey, operationName, query, variables, initial.cookieHeader);

  if (payload.errors?.length && initial.source !== "login") {
    const refreshed = await resolveCookieHeader(brandKey, true);
    if (refreshed.cookieHeader && shouldRetryWithFreshLogin(payload)) {
      ({ payload } = await executeFlicketQuery<T>(brandKey, operationName, query, variables, refreshed.cookieHeader));
    }
  }

  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join("; "));
  }

  if (!payload.data) {
    throw new Error(`Empty Flicket response for ${brandKey}`);
  }

  return payload.data;
}

async function loadOrdersByStatus(brandKey: CityConfig["brand"], statuses: string[]) {
  const nodes: OrderNode[] = [];
  let after: string | null = null;

  const query = `
    query orders($first: Int, $after: String, $where: OrderWhereInput, $orderBy: OrderOrderByInput) {
      orders(first: $first, after: $after, where: $where, orderBy: $orderBy) {
        edges {
          node {
            event {
              title
            }
            tickets {
              id
              lineItem {
                id
                quantity
                price
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `;

  while (true) {
    const data: {
      orders: {
        edges: Array<{ node: OrderNode }>;
        pageInfo: { hasNextPage: boolean; endCursor: string | null };
      };
    } = await flicketQuery(brandKey, "orders", query, {
      first: 50,
      after,
      where: { channel: null, source: "OVERALL", releaseId: null, refund: false, status: statuses },
      orderBy: { createdAt: "DESC" },
    });

    nodes.push(...data.orders.edges.map((edge) => edge.node));

    if (!data.orders.pageInfo.hasNextPage || !data.orders.pageInfo.endCursor) {
      break;
    }

    after = data.orders.pageInfo.endCursor;
  }

  return nodes;
}

async function loadEventSummaries(brandKey: CityConfig["brand"]) {
  const query = `
    query dashboardEvents($first: Int, $where: EventWhereInput, $orderBy: EventOrderByInput) {
      events(first: $first, where: $where, orderBy: $orderBy) {
        edges {
          node {
            title
            soldTicketsCount
            totalFaceValue
          }
        }
      }
    }
  `;

  const data: {
    events: {
      edges: Array<{ node: EventSummaryNode }>;
    };
  } = await flicketQuery(brandKey, "dashboardEvents", query, {
    first: 50,
    where: { startDate: new Date().toISOString() },
    orderBy: { startDate: "ASC" },
  });

  const totals = new Map<string, { qty: number; faceValue: number }>();
  for (const edge of data.events.edges) {
    const title = edge.node.title?.trim();
    if (!title) continue;
    totals.set(title, {
      qty: edge.node.soldTicketsCount ?? 0,
      faceValue: edge.node.totalFaceValue ?? 0,
    });
  }

  return totals;
}

function aggregateOrders(nodes: OrderNode[]) {
  const totals = new Map<string, { qty: number; faceValue: number }>();

  for (const node of nodes) {
    const title = node.event?.title?.trim();
    if (!title) continue;

    const tickets = node.tickets ?? [];
    const seenLineItems = new Set<string>();
    let faceValue = 0;

    for (const ticket of tickets) {
      const lineItem = ticket.lineItem;
      if (!lineItem?.id || seenLineItems.has(lineItem.id)) continue;
      seenLineItems.add(lineItem.id);
      faceValue += (lineItem.price ?? 0) * (lineItem.quantity ?? 0);
    }

    const current = totals.get(title) ?? { qty: 0, faceValue: 0 };
    current.qty += tickets.length;
    current.faceValue += faceValue;
    totals.set(title, current);
  }

  return totals;
}

export async function loadTicketingPageData(): Promise<TicketingPageData> {
  try {
    const brandResults = await Promise.all(
      (["f3", "urban"] as const).map(async (brandKey) => {
        const [sold, holdNodes] = await Promise.all([
          loadEventSummaries(brandKey),
          loadOrdersByStatus(brandKey, ["Hold"]),
        ]);

        return {
          brandKey,
          sold,
          hold: aggregateOrders(holdNodes),
        };
      }),
    );

    const soldByBrand = new Map(brandResults.map((result) => [result.brandKey, result.sold]));
    const holdByBrand = new Map(brandResults.map((result) => [result.brandKey, result.hold]));
    const lastUpdated = formatTimestamp();

    const cityCards = cityConfigs.map((city) => {
      const soldMap = soldByBrand.get(city.brand) ?? new Map<string, { qty: number; faceValue: number }>();
      const holdMap = holdByBrand.get(city.brand) ?? new Map<string, { qty: number; faceValue: number }>();

      const lines = city.lines.map((line) => {
        const sold = soldMap.get(line.eventTitle) ?? { qty: 0, faceValue: 0 };
        const hold = holdMap.get(line.eventTitle) ?? { qty: 0, faceValue: 0 };

        return {
          label: line.label,
          sold: formatInteger(sold.qty),
          faceValue: formatCurrency(sold.faceValue),
          holdQty: formatInteger(hold.qty),
          holdValue: formatCurrency(hold.faceValue),
          note: buildNote(sold.qty, hold.qty),
          soldQtyRaw: sold.qty,
          soldFaceValueRaw: sold.faceValue,
          holdQtyRaw: hold.qty,
          holdFaceValueRaw: hold.faceValue,
        };
      });

      const ticketsSoldRaw = lines.reduce((sum, line) => sum + line.soldQtyRaw, 0);
      const faceValueRaw = lines.reduce((sum, line) => sum + line.soldFaceValueRaw, 0);
      const holdQtyRaw = lines.reduce((sum, line) => sum + line.holdQtyRaw, 0);
      const holdValueRaw = lines.reduce((sum, line) => sum + line.holdFaceValueRaw, 0);

      return {
        season: city.season,
        city: city.city,
        date: city.date,
        venue: city.venue,
        ticketsSold: formatInteger(ticketsSoldRaw),
        faceValue: formatCurrency(faceValueRaw),
        holdQty: formatInteger(holdQtyRaw),
        holdValue: formatCurrency(holdValueRaw),
        lastUpdated,
        headline: city.headline,
        detail: city.detail,
        lines: lines.map((line) => ({
          label: line.label,
          sold: line.sold,
          faceValue: line.faceValue,
          holdQty: line.holdQty,
          holdValue: line.holdValue,
          note: line.note,
        })),
        previousEvent: city.previousEvent,
      } satisfies CityCard;
    });

    const scoreboard = [
      { label: "Cities live", value: String(cityCards.length) },
      { label: "Event lines", value: String(cityCards.reduce((sum, card) => sum + card.lines.length, 0)) },
      {
        label: "Tickets sold",
        value: formatInteger(
          cityCards.reduce((sum, card) => sum + Number(card.ticketsSold.replace(/,/g, "")), 0),
        ),
      },
      {
        label: "Face value tracked",
        value: formatCurrency(
          cityCards.reduce((sum, card) => sum + Number(card.faceValue.replace(/[$,]/g, "")), 0),
        ),
      },
    ];

    return {
      scoreboard,
      eventSheetLinks: [...eventSheetLinks],
      cityCards,
      sourceMode: "live",
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Flicket error";
    return {
      ...fallbackData,
      sourceNote: `Live Flicket pull failed, so Mission Control fell back to the last captured snapshot. ${message}`,
    };
  }
}
