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
import SimpleMDE from "react-simplemde-editor";
import { useIssueForm } from "./useIssueForm";

export default function NewIssueForm() {
  const { form, onSubmit } = useIssueForm();

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
                    <FormLabel className="text-sm text-slate-600">
                      Title
                    </FormLabel>
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
                    <Spinner /> Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
    </motion.div>
  );
}
