"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", broiler: 186, jantan: 80 },
  { month: "February", broiler: 305, jantan: 200 },
  { month: "March", broiler: 237, jantan: 120 },
  { month: "April", broiler: 73, jantan: 190 },
  { month: "May", broiler: 209, jantan: 130 },
  { month: "June", broiler: 214, jantan: 140 },
]

const chartConfig = {
  broiler: {
    label: "Broiler",
    color: "#325230",
  },
  jantan: {
    label: "Jantan",
    color: "#76be6c",
  },
} satisfies ChartConfig

export function MultipleBarChart() {
  return (
    <>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          <Bar dataKey="broiler" fill="#325230" radius={4} />
          <Bar dataKey="jantan" fill="#76be6c" radius={4} />
        </BarChart>
      </ChartContainer>
      <div className="flex-col items-start gap-2 text-sm mt-4">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground mt-2">
          Showing total lifestock for the last 6 months
        </div>
      </div>
    </>
  )
} 