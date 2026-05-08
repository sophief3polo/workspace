import { SponsorshipBoardPage } from "@/lib/sponsorship-board";

export const dynamic = "force-dynamic";

export default async function SponsorshipOthersPage() {
  return SponsorshipBoardPage({
    title: "Sponsorship - Others",
    description: "Pulled from Debbie's shared sheet. Same board structure as Teams & Umpire, focused on the Title & Others sponsorship tab.",
    activeNav: "others",
    sourceSheetNameCandidates: ["TITLE & OTHERS", "Title & Others", "TITLE&OTHERS"],
  });
}
