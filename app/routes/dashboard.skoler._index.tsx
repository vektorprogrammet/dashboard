import { DataTable } from "@/components/data-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ColumnDef } from "@tanstack/react-table";
import { getActiveSchools, getInactiveSchools } from "../mock/api/data-skoler";

export type School = {
  name: string;
  contact: string;
  phone: string;
  email: string;
  language: string;
};

export const columns: Array<ColumnDef<School>> = [
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
    header: "Skole",
  },
  {
    accessorKey: "contact",
    header: "Kontaktperson",
  },
  {
    accessorKey: "phone",
    header: "Telefon",
  },
  {
    accessorKey: "email",
    header: "E-post",
  },
  {
    accessorKey: "language",
    header: "Språk",
  },
];

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Skoler() {
  const activeSchools = getActiveSchools();
  const inactiveSchools = getInactiveSchools();

  return (
    <>
      <section className="flex flex-col items-center w-full min-w-0">
        <h1 className="mb-10 font-semibold text-2xl">Skoler</h1>
        <Tabs
          defaultValue="active"
          className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-6"
        >
          <div className="flex justify-center">
            <TabsList className="my-5 flex flex-wrap justify-center">
              <TabsTrigger value="active">Aktive skoler</TabsTrigger>
              <TabsTrigger value="inactive">Inaktive skoler</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="active" className="overflow-x-auto min-w-0">
            <div className="min-w-full max-w-full overflow-x-auto rounded-lg border border-gray-200">
              <DataTable columns={columns} data={activeSchools} />
            </div>
          </TabsContent>

          <TabsContent value="inactive" className="overflow-x-auto min-w-0">
            <div className="min-w-full max-w-full overflow-x-auto rounded-lg border border-gray-200">
              <DataTable columns={columns} data={inactiveSchools} />
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
