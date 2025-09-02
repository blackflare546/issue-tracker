import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { prisma } from "@/prisma/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import StatusBadge from "@/components/StatusBadge";

const IssuesPage = async () => {
  const issueData = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Issues</h1>
        <Button asChild>
          <Link href="/issues/new">New Issue</Link>
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-2xl border shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {issueData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-slate-500">
                  No issues found
                </TableCell>
              </TableRow>
            ) : (
              issueData.map((issue) => (
                <TableRow key={issue.id}>
                  <TableCell className="font-medium">{issue.id}</TableCell>
                  <TableCell>{issue.title}</TableCell>
                  <TableCell>
                    <StatusBadge status={issue.status} />
                  </TableCell>
                  <TableCell className="truncate max-w-xs">
                    {issue.description}
                  </TableCell>
                  <TableCell className="text-right text-sm text-slate-500">
                    {new Date(issue.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default IssuesPage;
