import TabsNavigation from "@/components/routing-tabs";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function TidligereAssistenter() {
  return (
    <>
      <h1>Tidligere Assistenter</h1>
      <TabsNavigation defaultValue="tidligere-assistenter" />
    </>
  );
}
