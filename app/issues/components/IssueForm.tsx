"use client";

import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import "easymde/dist/easymde.min.css";
import { motion } from "framer-motion";
import { useIssueForm } from "../hooks/useIssueForm";
import { Issue } from "@prisma/client";
import SimpleMDE from "react-simplemde-editor";

export default function IssueForm({ issue }: { issue?: Issue }) {
  const { form, onSubmit } = useIssueForm({ issue });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-slate-600">Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter a short descriptive title"
                    className="rounded-xl border-slate-300 focus:ring-2 focus:ring-slate-400"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-slate-600">
                  Description
                </FormLabel>
                <FormControl>
                  <SimpleMDE
                    placeholder="Provide more details about the issue..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full rounded-xl py-6 text-base font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            {form.formState.isSubmitting ? (
              <>
                <Spinner /> {issue ? "Updating..." : "Submitting..."}
              </>
            ) : issue ? (
              "Update Issue"
            ) : (
              "Submit Issue"
            )}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
