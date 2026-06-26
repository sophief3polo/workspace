import { SponsorshipBoardPage } from "@/lib/sponsorship-board";

export const dynamic = "force-dynamic";

export default async function SponsorshipTeamsUmpirePage() {
  return SponsorshipBoardPage({
    title: "Sponsorship - Teams & Umpire",
    description:
      "Pulled from Debbie's shared sheet. Same live board structure, focused on team, apparel, umpire, and lead slots.",
    activeNav: "teams",
    sourceSheetNameCandidates: ["TEAMS", "Teams", "TEAMS & UMPIRE", "Teams & Umpire"],
    sectionSpecs: [
      { headerRow: 7, rowStart: 8, rowEnd: 19, colStart: 1 },
      { headerRow: 7, rowStart: 8, rowEnd: 19, colStart: 7 },
      { headerRow: 21, rowStart: 22, rowEnd: 32, colStart: 1 },
      { headerRow: 34, rowStart: 35, rowEnd: 45, colStart: 1 },
      { headerRow: 34, rowStart: 35, rowEnd: 45, colStart: 7 },
    ],
  });
}
