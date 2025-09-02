import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingNewIssuePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-lg border border-slate-200 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-slate-800">
            <Skeleton className="h-7 w-48 rounded-md" />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-full rounded-xl" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-32 w-full rounded-xl" />
          </div>

          <Skeleton className="h-12 w-full rounded-xl" />
        </CardContent>
      </Card>
    </div>
  );
}
