import { useQuery } from "@tanstack/react-query";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
const tempSdk: any = {};

// Should be used to display all unhandled expenses
const { data: unhandled } = useQuery({
  queryKey: ["expenses"],
  queryFn: () => tempSdk.expenses.listUnhandled()
})

export default function Utlegg() {
  return (
    <>
      <h1>Utlegg</h1>
    </>
  );
}
