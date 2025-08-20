import App from "@/components/App";
import { Card, CardContent } from "@/components/ui/card";

// biome-ignore lint/style/noDefaultExport: Route Modules require default export https://reactrouter.com/start/framework/route-module
export default function Index() {
  return (
    <>
      <div className="flex gap-3">
        <Card className="w-100">
          {/* <App /> */}
          <CardContent className="w-fit max-w-full justify-center">
            <App />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
