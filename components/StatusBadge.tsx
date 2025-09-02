import { Status } from "@prisma/client";
import { Badge } from "@/components/ui/badge";

const STATUS_MAP: Record<
  Status,
  { label: string; color: string; hover: string }
> = {
  OPEN: {
    label: "Open",
    color: "bg-green-100 text-green-700",
    hover: "hover:bg-green-200",
  },
  IN_PROGRESS: {
    label: "In Progress",
    color: "bg-yellow-100 text-yellow-700",
    hover: "hover:bg-yellow-200",
  },
  CLOSED: {
    label: "Closed",
    color: "bg-red-100 text-red-700",
    hover: "hover:bg-red-200",
  },
};

const StatusBadge = ({ status }: { status: Status }) => {
  const { label, color, hover } = STATUS_MAP[status];

  return (
    <Badge
      variant="outline"
      className={`${color} ${hover} border-none font-medium px-2 py-1 rounded-lg`}
    >
      {label}
    </Badge>
  );
};

export default StatusBadge;
