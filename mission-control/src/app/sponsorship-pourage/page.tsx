import { SponsorshipBoardPage } from "@/lib/sponsorship-board";

export const dynamic = "force-dynamic";

export default async function SponsorshipPouragePage() {
  return SponsorshipBoardPage({
    title: "Sponsorship - Pourage",
    description: "Pulled from Debbie's shared sheet. Same board structure as Teams & Umpire, focused on pourage sponsor slots and their current status.",
    activeNav: "pourage",
    sourceSheetNameCandidates: ["POURAGE", "Pourage", "BEVERAGE", "Beverage"],
  });
}
