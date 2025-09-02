import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "easymde/dist/easymde.min.css";
import dynamic from "next/dynamic";

const IssueForm = dynamic(() => import("@/app/issues/components/IssueForm"), {
  ssr: false,
});

export default function NewIssuePage() {
  return (
    <div className="max-w-2xl mx-auto ">
      <Card className="shadow-lg border border-slate-200 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-slate-800">
            Create New Issue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <IssueForm />
        </CardContent>
      </Card>
    </div>
  );
}
