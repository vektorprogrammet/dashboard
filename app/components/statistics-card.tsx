import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function StatisticsCard(title: string, data: string) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <p className="font-bold text-2xl">{data}</p>
      </CardContent>
    </Card>
  );
}
