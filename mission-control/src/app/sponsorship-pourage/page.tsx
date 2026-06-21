import { SponsorshipBoardPage } from "@/lib/sponsorship-board";

export const dynamic = "force-dynamic";

export default async function SponsorshipPouragePage() {
  return SponsorshipBoardPage({
    title: "Sponsorship - Pourage",
    description: "Pulled directly from the Beverage tab in Debbie's shared sheet, so this board reflects the actual pourage categories and owners from that tab.",
    activeNav: "pourage",
    sourceSheetNameCandidates: ["POURAGE", "Pourage", "BEVERAGE", "Beverage"],
    sectionSpecs: [
      { headerRow: 7, rowStart: 8, rowEnd: 19, colStart: 1 },
      { headerRow: 7, rowStart: 8, rowEnd: 19, colStart: 8 },
      { headerRow: 20, rowStart: 21, rowEnd: 32, colStart: 1 },
      { headerRow: 34, rowStart: 35, rowEnd: 44, colStart: 1 },
      { headerRow: 34, rowStart: 35, rowEnd: 44, colStart: 8 },
    ],
  });
}
