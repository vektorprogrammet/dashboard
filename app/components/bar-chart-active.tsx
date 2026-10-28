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
  Rectangle,
  XAxis,
  YAxis,
} from "recharts";
import type { BarShapeProps } from "recharts/types/cartesian/Bar";

export type ActiveBarItem = {
  id: string;
  label: string;
  count: number;
  color?: string;
};

type BarChartActiveProps = {
  title: string;
  description?: string;
  data: Array<ActiveBarItem>;
  valueLabel?: string;
  color?: string;
  /** Use the applicant total when a category should be displayed as a percentage. */
  percentageBase?: number;
  /** Optional persistent highlight, identified by item id rather than array position. */
  activeId?: string;
  emptyMessage?: string;
  className?: string;
  order?: "asc" | "desc";
};

const numberFormat = new Intl.NumberFormat("nb-NO");
const percentFormat = new Intl.NumberFormat("nb-NO", {
  style: "percent",
  maximumFractionDigits: 1,
});

export function BarChartActive({
  title,
  description,
  data,
  valueLabel = "Søkere",
  color = "#073564",
  percentageBase,
  activeId,
  emptyMessage = "Ingen data tilgjengelig.",
  className,
  order,
}: BarChartActiveProps) {
  const showPercentages = percentageBase !== undefined && percentageBase > 0;
  const chartData = data
    .map((item) => ({
      ...item,
      value: showPercentages ? item.count / percentageBase : item.count,
      fill: item.color ?? color,
    }))
    .sort((a, b) => {
      if (order === "desc") {
        return b.value - a.value;
      } else if (order === "asc") {
        return a.value - b.value;
      }
      return 0;
    });
  const config = { value: { label: valueLabel, color } } satisfies ChartConfig;
  const formatValue = (value: number) =>
    showPercentages ? percentFormat.format(value) : numberFormat.format(value);

  return (
    <Card className={className}>
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
          <section
            className="overflow-x-auto"
            // biome-ignore lint/a11y/noNoninteractiveTabindex: Keyboard users need to scroll wide charts.
            tabIndex={0}
            aria-label={`${title}, diagram som kan rulles horisontalt`}
          >
            <ChartContainer
              config={config}
              className="aspect-auto h-[320px] w-full"
              style={{ minWidth: Math.max(360, data.length * 56) }}
            >
              <BarChart
                accessibilityLayer
                data={chartData}
                margin={{ top: 24, right: 16, bottom: 16, left: 8 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="label"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  interval={0}
                  angle={-40}
                  textAnchor="end"
                  height={65}
                />
                <YAxis
                  type="number"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={formatValue}
                  allowDecimals={showPercentages}
                  width={55}
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
                  radius={[6, 6, 0, 0]}
                  maxBarSize={32}
                  activeBar={{ fillOpacity: 0.8, strokeWidth: 2 }}
                  shape={({ index, ...props }: BarShapeProps) => (
                    <Rectangle
                      {...props}
                      fillOpacity={chartData[index]?.id === activeId ? 0.8 : 1}
                      stroke={
                        chartData[index]?.id === activeId
                          ? chartData[index].fill
                          : "none"
                      }
                      strokeWidth={2}
                      strokeDasharray={4}
                    />
                  )}
                >
                  <LabelList
                    dataKey="value"
                    position="top"
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
