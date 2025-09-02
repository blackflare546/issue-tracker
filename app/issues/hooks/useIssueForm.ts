"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import { IssueFormType, issueSchema } from "@/validations/issueSchema";

export const useIssueForm = ({ issue }: { issue?: Issue }) => {
  const router = useRouter();

  const form = useForm<IssueFormType>({
    resolver: zodResolver(issueSchema),
    defaultValues: {
      title: issue?.title || "",
      description: issue?.description || "",
    },
  });

  const onSubmit = async (data: IssueFormType) => {
    try {
      if (issue) {
        await axios.patch(`/api/issues/${issue.id}`, data);
        toast.success("Issue updated successfully!");
      } else {
        await axios.post("/api/issues", data);
        toast.success("Issue created successfully!");
      }

      router.push("/issues");
      router.refresh();
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const message =
          err.response?.data?.message || "Failed to save issue (server error)";
        toast.error(message);
        console.error("Axios error:", err.response?.data || err.message);
      } else {
        toast.error("Something went wrong. Please try again.");
        console.error("Unexpected error:", err);
      }
    }
  };

  return { form, onSubmit };
};
