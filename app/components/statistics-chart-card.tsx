import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Label, Pie, PieChart } from "recharts";

export type StatisticsChartItem = {
  id: string;
  label: string;
  count: number;
  color: string;
};

type StatisticsChartCardProps = {
  title: string;
  description?: string;
  data: Array<StatisticsChartItem>;
  totalLabel?: string;
  emptyMessage?: string;
  className?: string;
};

const numberFormat = new Intl.NumberFormat("nb-NO");
const percentageFormat = new Intl.NumberFormat("nb-NO", {
  style: "percent",
  maximumFractionDigits: 1,
});

/** A donut card for mutually exclusive categories; percentages use the sum of counts. */
export function StatisticsChartCard({
  title,
  description,
  data,
  totalLabel = "Totalt",
  emptyMessage = "Ingen data tilgjengelig.",
  className,
}: StatisticsChartCardProps) {
  const chartConfig: ChartConfig = { count: { label: totalLabel } };
  const chartData = data.map((item, index) => {
    const key = `category${index}`;
    chartConfig[key] = { label: item.label, color: item.color };
    return { ...item, category: key, fill: `var(--color-${key})` };
  });
  const total = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <Card className={`min-w-0 self-start ${className ?? ""}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {total === 0 ? (
          <p className="py-16 text-center text-muted-foreground">
            {emptyMessage}
          </p>
        ) : (
          <div className="grid items-center gap-4 sm:grid-cols-[180px_minmax(0,1fr)]">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square h-[180px] w-[180px]"
              aria-label={`${title}: ${numberFormat.format(total)} ${totalLabel}`}
            >
              <PieChart accessibilityLayer>
                <ChartTooltip
                  content={<ChartTooltipContent nameKey="category" hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="count"
                  nameKey="category"
                  innerRadius="65%"
                  outerRadius="90%"
                  strokeWidth={3}
                >
                  <Label
                    position="center"
                    content={({ viewBox }) => {
                      if (!viewBox) return null;
                      if (!("cx" in viewBox && "cy" in viewBox)) return null;
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            className="fill-foreground font-bold text-2xl"
                          >
                            {numberFormat.format(total)}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            dy="20"
                            className="fill-muted-foreground text-sm"
                          >
                            {totalLabel}
                          </tspan>
                        </text>
                      );
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
            <ul
              className="space-y-3"
              aria-label={`${title}: antall og prosent`}
            >
              {data.map(({ id, label, count, color }) => (
                <li key={id} className="flex items-center gap-2 text-base">
                  <span
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  <span className="flex-1">{label}</span>
                  <span className="text-muted-foreground tabular-nums">
                    {numberFormat.format(count)}
                  </span>
                  <span className="min-w-16 text-right font-medium tabular-nums">
                    {percentageFormat.format(count / total)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
