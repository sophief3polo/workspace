"use client";

import { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";

const REFRESH_INTERVAL_MS = 30_000;

export function TicketingAutoRefresh() {
  const router = useRouter();
  const [, startTransition] = useTransition();

  useEffect(() => {
    const interval = window.setInterval(() => {
      startTransition(() => {
        router.refresh();
      });
    }, REFRESH_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [router, startTransition]);

  return (
    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#7f8797]">
      Auto-refreshing every 30 seconds while this page is open
    </p>
  );
}
