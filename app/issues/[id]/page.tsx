import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import StatusBadge from "@/components/StatusBadge";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issueId = parseInt(params.id);

  if (isNaN(issueId)) notFound();

  const issue = await prisma.issue.findUnique({
    where: { id: issueId },
  });

  if (!issue) notFound();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="shadow-lg border border-slate-200 rounded-2xl">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold">{issue.title}</CardTitle>
            <StatusBadge status={issue.status} />
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-4 mt-4">
          <div>
            <h2 className="text-sm font-semibold text-slate-500 mb-1">
              Description
            </h2>
            <p className="text-slate-700">{issue.description}</p>
          </div>
          <div className="flex justify-between text-sm text-slate-500">
            <span>
              Created: {new Date(issue.createdAt).toLocaleDateString()}
            </span>
            {issue.updatedAt && (
              <span>
                Updated: {new Date(issue.updatedAt).toLocaleDateString()}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
