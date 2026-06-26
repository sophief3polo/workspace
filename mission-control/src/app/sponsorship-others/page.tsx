import { SponsorshipBoardPage } from "@/lib/sponsorship-board";

export const dynamic = "force-dynamic";

export default async function SponsorshipOthersPage() {
  return SponsorshipBoardPage({
    title: "Sponsorship - Title & Others",
    description: "Pulled directly from the Title & Others tab in Debbie's shared sheet, including the current category rows, statuses and owners for each event.",
    activeNav: "others",
    sourceSheetNameCandidates: ["TITLE & OTHERS", "Title & Others", "TITLE&OTHERS"],
    sectionSpecs: [
      { headerRow: 7, rowStart: 8, rowEnd: 30, colStart: 1 },
      { headerRow: 7, rowStart: 8, rowEnd: 30, colStart: 7 },
      { headerRow: 32, rowStart: 33, rowEnd: 54, colStart: 1 },
      { headerRow: 56, rowStart: 57, rowEnd: 79, colStart: 1 },
      { headerRow: 56, rowStart: 57, rowEnd: 79, colStart: 7 },
    ],
  });
}
