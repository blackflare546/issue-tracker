import z from "zod";

export type IssueForm = z.infer<typeof issueSchema>;

export const issueSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(1, "Title is required") 
    .max(255),
  description: z
    .string({ required_error: "Description is required" })
    .min(1, "Description is required"),
});

