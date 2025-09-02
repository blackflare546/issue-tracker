import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "easymde/dist/easymde.min.css";
import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

interface Props {
  params: { id: string };
}

const IssueForm = dynamic(() => import("@/app/issues/components/IssueForm"), {
  ssr: false,
});

export default async function EditIssuePage({ params }: Props) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-lg border border-slate-200 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-slate-800">
            Edit Issue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <IssueForm issue={issue} />
        </CardContent>
      </Card>
    </div>
  );
}
