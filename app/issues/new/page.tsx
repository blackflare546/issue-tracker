import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "easymde/dist/easymde.min.css";
import NewIssueForm from "./NewIssueForm";

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
          <NewIssueForm />
        </CardContent>
      </Card>
    </div>
  );
}
