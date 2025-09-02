import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function LoadingIssueDetailPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="shadow-lg border border-slate-200 rounded-2xl">
        <CardHeader>
          <div className="flex justify-between items-center">
            <Skeleton className="h-7 w-2/3 rounded-md" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-6 mt-4">
          <div>
            <Skeleton className="h-4 w-24 mb-3 rounded-md" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-5/6 rounded-md" />
              <Skeleton className="h-4 w-2/3 rounded-md" />
            </div>
          </div>

          <div className="flex justify-between text-sm text-slate-500">
            <Skeleton className="h-4 w-28 rounded-md" />
            <Skeleton className="h-4 w-28 rounded-md" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
