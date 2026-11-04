// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
import { DataTable } from "@/components/data-table";
import { headerBrukere } from "@/components/table-headers/header-brukere";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ColumnDef } from "@tanstack/react-table";
import { getActiveUsers, getInactiveUsers } from "../mock/api/data-brukere";

export type User = {
  name: string;
  phone: string;
  mail: string;
  major: string;
  place: string;
  status: string;
};
export const columns: Array<ColumnDef<User>> = headerBrukere;
export default function Brukere() {
  const activeUsers = getActiveUsers();
  const inActiveUsers = getInactiveUsers();
  return (
    <>
      <h1>Brukere</h1>
      <section className="flex w-full min-w-0 flex-col items-center ">
        <h1 className="mb-10 font-semibold text-2xl">Brukere</h1>
        <Tabs
          defaultValue="active"
          className="mb-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex justify-center">
            <TabsList className="my-5 flex flex-wrap justify-center">
              <TabsTrigger value="active">Aktive Brukere</TabsTrigger>
              <TabsTrigger value="inactive">Inaktive Brukere</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="active" className="min-w-0 overflow-x-auto">
            <div className="min-w-full max-w-full overflow-x-auto rounded-lg border border-gray-200">
              <DataTable columns={columns} data={activeUsers} />
            </div>
          </TabsContent>

          <TabsContent value="inactive" className="min-w-0 overflow-x-auto">
            <div className="min-w-full max-w-full overflow-x-auto rounded-lg border border-gray-200">
              <DataTable columns={columns} data={inActiveUsers} />
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
