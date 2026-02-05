import { DataTable } from "@/components/data-table";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import { DataSokere } from "../mock/api/data-assistenter";

export type Assistent = {
  id: string;
  name: string;
  tlf: string;
  school: string;
  email: string;
  study: string;
  year: string;
  assigned: string;
  semester: string;
  day: string;
};

export const columns: Array<ColumnDef<Assistent>> = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Navn",
  },
  {
    accessorKey: "school",
    header: "Skole",
  },
  {
    accessorKey: "email",
    header: "E-post",
  },
  {
    accessorKey: "semester",
    header: "semester",
  },
  {
    accessorKey: "department",
    header: "avdeling",
  },
  {
    accessorKey: "bulk",
    header: "bolk",
  },
  {
    accessorKey: "day",
    header: "dag",
  }
];

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Sokere() {
  return (
    <main className="flex h-full w-screen flex-col items-center justify-center gap-5 overflow-clip p-1 md:w-full md:p-6">
      {/* <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="sokere">Søkere</TabsTrigger>
          <TabsTrigger value="tidligereAssistenter">
            Tidligere Assistenter
          </TabsTrigger>
          <TabsTrigger value="intervjufordeling">Intervjufordeling</TabsTrigger>
          <TabsTrigger value="intervjuer">Intervjuer</TabsTrigger>
        </TabsList>
      </Tabs> */}
      <DataTable columns={columns} data={DataSokere} />
    </main>
  );
}
