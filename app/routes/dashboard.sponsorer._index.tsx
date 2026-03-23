import { useQuery } from "@tanstack/react-query";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
const tempSdk: any = {};

// Should be used to display all sponsors
const { data: sponsors } = useQuery({
  queryKey: ["sponsors"],
  queryFn: () => tempSdk.sponsors.list()
})

export default function Sponsorer() {
  return (
    <>
      <h1>Sponsorer</h1>
    </>
  );
}
