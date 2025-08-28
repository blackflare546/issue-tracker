import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { issueSchema } from "@/validations/issueSchema";

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const validation = issueSchema.safeParse(body);

  if (!validation.success) {
    const message = validation.error.errors[0]?.message;
    return NextResponse.json({ message }, { status: 400 });
  }

  const { title, description } = validation.data;

  const newIssue = await prisma.issue.create({
    data: {
      title,
      description,
    },
  });

  return NextResponse.json(newIssue, { status: 201 });
};
