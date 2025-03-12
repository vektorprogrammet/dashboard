import { Button } from "@/components/ui/button";
import type { LoaderFunction, MetaFunction } from "react-router";
import { Link, redirect } from "react-router";

/* export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/sign-in");
  }
  return {};
}; */
export const loader: LoaderFunction = () => {
  return redirect("/dashboard");
};

export const meta: MetaFunction = () => {
  return [
    { title: "Vektor Dashboard" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Index() {
  return (
    <main className="grid h-dvh place-items-center">
      <Button variant={"default"} asChild>
        <Link to={"/dashboard"}>Log in</Link>
      </Button>
    </main>
  );
}
