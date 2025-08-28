"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { IssueForm } from "@/app/validations/issueSchema";
import { issueSchema } from "@/app/validationSchemas";

export const useIssueForm = () => {
  const router = useRouter();

  const form = useForm<IssueForm>({
    resolver: zodResolver(issueSchema),
  });

  const onSubmit = async (data: IssueForm) => {
    try {
      await axios.post("/api/issues", data);
      toast.success("Issue created successfully!");
      router.push("/issues");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const message =
          err.response?.data?.message ||
          "Failed to create issue (server error)";
        toast.error(message);
        console.error("Axios error:", err.response?.data || err.message);
      } else {
        toast.error("Something went wrong. Please try again.");
        console.error("Unexpected error:", err);
      }
    }
  };

  return {
    form,
    onSubmit,
  };
};
