"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import { Button } from "@/components/Button";
import { BarChart } from "@/components/BarChart";
import { ComboChart } from "@/components/ComboChart";
import { ConditionalBarChart } from "@/components/ConditionalBarChart";
import {
  CustomTooltip,
  CustomTooltip2,
  CustomTooltip3,
  CustomTooltip4,
} from "@/components/CustomTooltips";
import { formatters } from "@/lib/utils";
import { SlidersHorizontal } from "lucide-react";

const data = [
  {
    date: "Jan 24",
    "Current year": 23,
    "Same period last year": 67,
  },
  {
    date: "Feb 24",
    "Current year": 31,
    "Same period last year": 23,
  },
  {
    date: "Mar 24",
    "Current year": 46,
    "Same period last year": 78,
  },
  {
    date: "Apr 24",
    "Current year": 46,
    "Same period last year": 23,
  },
  {
    date: "May 24",
    "Current year": 39,
    "Same period last year": 32,
  },
  {
    date: "Jun 24",
    "Current year": 65,
    "Same period last year": 32,
  },
];

const data2 = [
  {
    date: "Jan 24",
    Quotes: 120,
    "Total deal size": 55000,
  },
  {
    date: "Feb 24",
    Quotes: 183,
    "Total deal size": 75400,
  },
  {
    date: "Mar 24",
    Quotes: 165,
    "Total deal size": 50450,
  },
  {
    date: "Apr 24",
    Quotes: 99,
    "Total deal size": 41540,
  },
  {
    date: "May 24",
    Quotes: 194,
    "Total deal size": 63850,
  },
  {
    date: "Jun 24",
    Quotes: 241,
    "Total deal size": 73850,
  },
];

const data3 = [
  {
    date: "Jan 24",
    Addressed: 8,
    Unrealized: 12,
  },
  {
    date: "Feb 24",
    Addressed: 9,
    Unrealized: 12,
  },
  {
    date: "Mar 24",
    Addressed: 6,
    Unrealized: 12,
  },
  {
    date: "Apr 24",
    Addressed: 5,
    Unrealized: 12,
  },
  {
    date: "May 24",
    Addressed: 12,
    Unrealized: 12,
  },
  {
    date: "Jun 24",
    Addressed: 9,
    Unrealized: 12,
  },
];

const data4 = [
  {
    date: "Jan 24",
    Density: 0.891,
  },
  {
    date: "Feb 24",
    Density: 0.084,
  },
  {
    date: "Mar 24",
    Density: 0.155,
  },
  {
    date: "Apr 24",
    Density: 0.75,
  },
  {
    date: "May 24",
    Density: 0.221,
  },
  {
    date: "Jun 24",
    Density: 0.561,
  },
];

export default function Monitoring() {
  return (
    <>
      <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <Select defaultValue="365-days">
          <SelectTrigger className="py-1.5 sm:w-44">
            <SelectValue placeholder="Assigned to..." />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="30-days">Last 30 days</SelectItem>
            <SelectItem value="90-days">Last 90 days</SelectItem>
            <SelectItem value="180-days">Last 180 days</SelectItem>
            <SelectItem value="365-days">Last 365 days</SelectItem>
          </SelectContent>
        </Select>
        <Button
          variant="secondary"
          className="text-base sm:text-sm w-full sm:w-fit py-1.5 gap-2"
        >
          <SlidersHorizontal
            className="-ml-0.5 size-4 shrink-0 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
          />
          Report Filters
        </Button>
      </div>
      <dl className="p-6 border-t border-gray-200 dark:border-gray-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="p-4">
          <dt className="text-sm text-gray-900 dark:text-gray-50 font-semibold">
            Inherent risk
          </dt>
          <dd className="mt-0.5 text-sm text-gray-500 dark:text-gray-500">
            Risk scenarios over time grouped by risk level
          </dd>
          <BarChart
            data={data}
            index="date"
            categories={["Current year", "Same period last year"]}
            colors={["blue", "lightGray"]}
            yAxisWidth={45}
            customTooltip={CustomTooltip}
            yAxisLabel="Number of inherent risks"
            barCategoryGap="20%"
            onValueChange={(v) => console.log(v)}
            className="mt-6 h-60"
          />
        </div>
        <div className="p-4">
          <dt className="text-sm text-gray-900 dark:text-gray-50 font-semibold">
            {/* Lead-to-Quote time */}
            Quote-to-Deal ratio
          </dt>
          <dd className="mt-0.5 text-sm text-gray-500 dark:text-gray-500">
            {/* Analysis of the avg. duration from lead generation to quote
                  issuance */}
            Number of quotes compared to total deal size for given month
          </dd>
          <ComboChart
            data={data2}
            index="date"
            enableBiaxial={true}
            barSeries={{
              categories: ["Quotes"],
              yAxisLabel: "Number of quotes / Deal size ($)",
            }}
            lineSeries={{
              categories: ["Total deal size"],
              colors: ["lightGray"],
              yAxisWidth: 60,
              showYAxis: false,
              valueFormatter: (number: number) =>
                `$${Intl.NumberFormat().format(number).toString()}`,
            }}
            customTooltip={CustomTooltip2}
            className="mt-6 h-60"
          />
        </div>
        <div className="p-4">
          <dt className="text-sm text-gray-900 dark:text-gray-50 font-semibold">
            ESG impact
          </dt>
          <dd className="mt-0.5 text-sm text-gray-500 dark:text-gray-500">
            Evaluation of addressed ESG criteria in biddings over time
          </dd>
          <BarChart
            data={data3}
            index="date"
            categories={["Addressed", "Unrealized"]}
            colors={["emerald", "lightEmerald"]}
            customTooltip={CustomTooltip3}
            type="percent"
            yAxisWidth={55}
            yAxisLabel="% of criteria addressed"
            barCategoryGap="30%"
            className="mt-6 h-60"
          />
        </div>
        <div className="p-4">
          <dt className="text-sm text-gray-900 dark:text-gray-50 font-semibold">
            Bidder density
          </dt>
          <dd className="mt-0.5 text-sm text-gray-500 dark:text-gray-500">
            Competition level measured by number and size of bidders over time
          </dd>
          <ConditionalBarChart
            data={data4}
            index="date"
            categories={["Density"]}
            colors={["orange"]}
            customTooltip={CustomTooltip4}
            valueFormatter={(value) =>
              formatters.percentage({ number: value, decimals: 0 })
            }
            yAxisWidth={55}
            yAxisLabel="Competition density (%)"
            barCategoryGap="30%"
            className="mt-6 h-60"
          />
        </div>
      </dl>
    </>
  );
}
