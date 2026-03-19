import { DataTable } from "@/components/data-table";
import type { ColumnDef } from "@tanstack/react-table";
import { DataSokere } from "../mock/api/data-sokere";
import { TableColumnHeader } from "@/components/table-column-header";
import { TableColumnPerson } from "@/components/table-column-person";
import { headerSokere } from "@/components/table-headers/header-sokere";

export type Soker = {
  id: string;
  name: string;
  tlf: string;
  school: string;
  email: string;
  study: string;
  year: string;
  assigned: string;
};

export const columns: Array<ColumnDef<Soker>> = headerSokere;

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Sokere() {
  return (
    <main>
      <DataTable columns={columns} data={DataSokere} />
    </main>
  );
}
