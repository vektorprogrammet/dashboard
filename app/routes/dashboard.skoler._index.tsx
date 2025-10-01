import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Skoler() {
  return (
    <>
      <section className="flex flex-col items-center">
        <h1 className="mb-10 font-semibold text-2xl">Skoler</h1>
        <Tabs defaultValue="active" className="w-[400px] items-center">
          <TabsList>
            <TabsTrigger value="active">Aktive skoler</TabsTrigger>
            <TabsTrigger value="inactive">Inaktive skoler</TabsTrigger>
          </TabsList>
          <TabsContent value="active">Active</TabsContent>
          <TabsContent value="inactive">Inactive</TabsContent>
        </Tabs>
      </section>
    </>
  );
}
