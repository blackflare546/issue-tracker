import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "@/validations/issueSchema";

export const PATCH = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const body = await request.json();

  const validation = issueSchema.safeParse(body);

  if (!validation.success) {
    const message = validation.error.errors[0]?.message;
    return NextResponse.json({ message }, { status: 400 });
  }

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) {
    return NextResponse.json("Invalid Issue", { status: 404 });
  }

  const { title, description } = validation.data;

  const updateIssue = await prisma.issue.update({
    where: { id: parseInt(params.id) },
    data: { title, description },
  });

  return NextResponse.json(updateIssue);
};
