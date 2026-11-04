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
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

export type HorizontalBarItem = {
  id: string;
  label: string;
  count: number;
  color?: string;
};

type BarChartHorizontalProps = {
  title: string;
  description?: string;
  data: Array<HorizontalBarItem>;
  valueLabel?: string;
  color?: string;
  /** Supply the applicant total for percentages, especially for multiple-choice questions. */
  percentageBase?: number;
  emptyMessage?: string;
  className?: string;
};

const numberFormat = new Intl.NumberFormat("nb-NO");
const percentFormat = new Intl.NumberFormat("nb-NO", {
  style: "percent",
  maximumFractionDigits: 1,
});

export function BarChartHorizontal({
  title,
  description,
  data,
  valueLabel = "Søkere",
  color = "#073564",
  percentageBase,
  emptyMessage = "Ingen data tilgjengelig.",
  className,
}: BarChartHorizontalProps) {
  const showPercentages = percentageBase !== undefined && percentageBase > 0;
  const chartData = data.map((item) => ({
    ...item,
    value: showPercentages ? item.count / percentageBase : item.count,
    fill: item.color ?? color,
  }));
  const config = { value: { label: valueLabel, color } } satisfies ChartConfig;
  const formatValue = (value: number) =>
    showPercentages ? percentFormat.format(value) : numberFormat.format(value);

  return (
    <Card className={`min-w-0 ${className ?? ""}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {data.length === 0 || data.every((item) => item.count === 0) ? (
          <p className="py-16 text-center text-muted-foreground">
            {emptyMessage}
          </p>
        ) : (
          <section className="min-w-0" aria-label={title}>
            <ChartContainer
              config={config}
              className="aspect-auto w-full min-w-0"
              style={{ height: Math.max(210, data.length * 30 + 40) }}
            >
              <BarChart
                accessibilityLayer
                data={chartData}
                layout="vertical"
                margin={{ top: 4, right: 42, bottom: 4, left: 0 }}
              >
                <CartesianGrid horizontal={false} />
                <XAxis
                  type="number"
                  dataKey="value"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={formatValue}
                  allowDecimals={showPercentages}
                  tickCount={4}
                />
                <YAxis
                  dataKey="label"
                  type="category"
                  tickLine={false}
                  axisLine={false}
                  width={130}
                  interval={0}
                  tickMargin={6}
                />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      formatter={(_value, _name, item) => (
                        <span className="font-medium tabular-nums">
                          {numberFormat.format(item.payload.count)}{" "}
                          {valueLabel.toLowerCase()}
                          {showPercentages &&
                            ` · ${formatValue(item.payload.value)}`}
                        </span>
                      )}
                    />
                  }
                />
                <Bar
                  dataKey="value"
                  fill="var(--color-value)"
                  radius={[0, 4, 4, 0]}
                  maxBarSize={18}
                >
                  <LabelList
                    dataKey="value"
                    position="right"
                    formatter={(value) => formatValue(Number(value))}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
            <ul className="sr-only">
              {chartData.map((item) => (
                <li key={item.id}>
                  {item.label}: {numberFormat.format(item.count)} {valueLabel}
                  {showPercentages && `, ${formatValue(item.value)}`}
                </li>
              ))}
            </ul>
          </section>
        )}
      </CardContent>
    </Card>
  );
}
