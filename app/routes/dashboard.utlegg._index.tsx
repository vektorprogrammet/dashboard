import { useQuery } from "@tanstack/react-query";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
const tempSdk: any = {};

const { data: expenses } = useQuery({
  queryKey: ["expenses"],
  queryFn: () => tempSdk.expenses.listUnhandled()
})

console.log(expenses);

export default function Utlegg() {
  return (
    <>
      <h1>Utlegg</h1>
    </>
  );
}
