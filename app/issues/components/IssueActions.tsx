import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const IssueActions = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold">Issues</h1>
      <Button asChild>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssueActions;
