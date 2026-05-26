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
      { headerRow: 7, rowStart: 8, rowEnd: 24, colStart: 1 },
      { headerRow: 7, rowStart: 8, rowEnd: 24, colStart: 7 },
      { headerRow: 26, rowStart: 27, rowEnd: 43, colStart: 1 },
      { headerRow: 26, rowStart: 27, rowEnd: 43, colStart: 7 },
      { headerRow: 45, rowStart: 46, rowEnd: 62, colStart: 1 },
      { headerRow: 45, rowStart: 46, rowEnd: 62, colStart: 7 },
    ],
  });
}
