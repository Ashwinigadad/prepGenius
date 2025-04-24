import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CoverLetterList from "./_components/cover-letter-list";
import { getCoverLetters } from "@/actions/cover-letter";

// Define the type inline here
type CoverLetter = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  content: string;
  jobDescription: string | null;  // jobDescription as string only
  companyName: string;
  jobTitle: string;
  status: string;
};

export default async function CoverLetterPage() {
  const coverLetters: CoverLetter[] = await getCoverLetters();

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">My Cover Letters</h1>
        <Link href="/ai-cover-letter/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create New
          </Button>
        </Link>
      </div>

      <CoverLetterList coverLetters={coverLetters} />
    </div>
  );
}
