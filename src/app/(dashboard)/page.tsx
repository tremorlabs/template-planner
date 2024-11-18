"use client";

import { Fragment } from "react";
import { cx } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import { BarChart } from "@/components/BarChart";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import { Input } from "@/components/Input";
import { Download, SlidersHorizontal } from "lucide-react";

const quotes = [
  {
    region: "Europe",
    project: [
      {
        company: "Walton Holding",
        size: "50K USD",
        probability: "40%",
        duration: "18 months",
        status: "Drafted",
        assigned: [
          {
            name: "Emily S.",
            initials: "E",
          },
          {
            name: "Max W.",
            initials: "M",
          },
          {
            name: "Victoria S.",
            initials: "V",
          },
        ],
      },
      {
        company: "Zurich Coats LLC",
        size: "100-150K USD",
        probability: "80%",
        duration: "24 months",
        status: "Sent",
        assigned: [
          {
            name: "Emma S.",
            initials: "E",
          },
          {
            name: "Chris B.",
            initials: "C",
          },
        ],
      },
      {
        company: "Riverflow Media Group",
        size: "280-300K USD",
        probability: "80%",
        duration: "24 months",
        status: "Sent",
        assigned: [
          {
            name: "Emma S.",
            initials: "E",
          },
          {
            name: "Chris B.",
            initials: "C",
          },
        ],
      },
      {
        company: "Nordic Solutions AG",
        size: "175K USD",
        probability: "60%",
        duration: "12 months",
        status: "Drafted",
        assigned: [
          {
            name: "Victoria S.",
            initials: "V",
          },
          {
            name: "Max W.",
            initials: "M",
          },
        ],
      },
      {
        company: "Swiss Tech Innovations",
        size: "450K USD",
        probability: "90%",
        duration: "36 months",
        status: "Sent",
        assigned: [
          {
            name: "Emily S.",
            initials: "E",
          },
          {
            name: "Chris B.",
            initials: "C",
          },
        ],
      },
      {
        company: "Berlin Digital Hub",
        size: "200K USD",
        probability: "70%",
        duration: "15 months",
        status: "Drafted",
        assigned: [
          {
            name: "Emma S.",
            initials: "E",
          },
        ],
      },
    ],
  },
  {
    region: "Asia",
    project: [
      {
        company: "Real Estate Group",
        size: "1.2M USD",
        probability: "100%",
        duration: "6 months",
        status: "Closed",
        assigned: [
          {
            name: "Lena M.",
            initials: "L",
          },
          {
            name: "Sara B.",
            initials: "S",
          },
        ],
      },
      {
        company: "Grison Appartments",
        size: "100K USD",
        probability: "20%",
        duration: "12 months",
        status: "Drafted",
        assigned: [
          {
            name: "Jordan A.",
            initials: "J",
          },
          {
            name: "Corinna B.",
            initials: "C",
          },
        ],
      },
      {
        company: "Tokyo Tech Solutions",
        size: "750K USD",
        probability: "85%",
        duration: "24 months",
        status: "Sent",
        assigned: [
          {
            name: "Lena M.",
            initials: "L",
          },
          {
            name: "Jordan A.",
            initials: "J",
          },
        ],
      },
      {
        company: "Singapore Systems Ltd",
        size: "300K USD",
        probability: "75%",
        duration: "18 months",
        status: "Drafted",
        assigned: [
          {
            name: "Sara B.",
            initials: "S",
          },
        ],
      },
      {
        company: "Seoul Digital Corp",
        size: "880K USD",
        probability: "95%",
        duration: "30 months",
        status: "Sent",
        assigned: [
          {
            name: "Corinna B.",
            initials: "C",
          },
          {
            name: "Lena M.",
            initials: "L",
          },
        ],
      },
      {
        company: "Mumbai Innovations",
        size: "450K USD",
        probability: "40%",
        duration: "12 months",
        status: "Drafted",
        assigned: [
          {
            name: "Jordan A.",
            initials: "J",
          },
        ],
      },
    ],
  },
  {
    region: "North America",
    project: [
      {
        company: "Liquid Holdings Group",
        size: "5.1M USD",
        probability: "100%",
        duration: "Member",
        status: "Closed",
        assigned: [
          {
            name: "Charlie A.",
            initials: "C",
          },
        ],
      },
      {
        company: "Craft Labs, Inc.",
        size: "80-90K USD",
        probability: "80%",
        duration: "18 months",
        status: "Sent",
        assigned: [
          {
            name: "Charlie A.",
            initials: "C",
          },
          {
            name: "Patrick D.",
            initials: "P",
          },
        ],
      },
      {
        company: "Toronto Tech Hub",
        size: "250K USD",
        probability: "65%",
        duration: "12 months",
        status: "Drafted",
        assigned: [
          {
            name: "Patrick D.",
            initials: "P",
          },
          {
            name: "Charlie A.",
            initials: "C",
          },
        ],
      },
      {
        company: "Silicon Valley Startups",
        size: "1.5M USD",
        probability: "90%",
        duration: "24 months",
        status: "Sent",
        assigned: [
          {
            name: "Charlie A.",
            initials: "C",
          },
        ],
      },
      {
        company: "NYC Digital Solutions",
        size: "750K USD",
        probability: "70%",
        duration: "15 months",
        status: "Drafted",
        assigned: [
          {
            name: "Patrick D.",
            initials: "P",
          },
        ],
      },
    ],
  },
];

const colorClasses = [
  "bg-blue-500 dark:bg-blue-500",
  "bg-purple-500 dark:bg-purple-500",
  "bg-emerald-500 dark:bg-emerald-500",
  "bg-cyan-500 dark:bg-cyan-500",
  "bg-rose-500 dark:bg-rose-500",
  "bg-indigo-500 dark:bg-indigo-500",
];

const getRandomColor = (initials: string) => {
  const seed = initials
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colorClasses[seed % colorClasses.length];
};

function Indicator({ number }: { number: number }) {
  let category;
  if (number < 0.3) {
    category = "red";
  } else if (number >= 0.3 && number < 0.7) {
    category = "orange";
  } else if (number >= 0.7) {
    category = "emerald";
  } else {
    category = "gray";
  }

  const getBarClass = (index: number) => {
    switch (category) {
      case "red":
        return index < 1
          ? "bg-red-500 dark:bg-red-500"
          : "bg-gray-300 dark:bg-gray-800";
      case "orange":
        return index < 2
          ? "bg-orange-500 dark:bg-orange-500"
          : "bg-gray-300 dark:bg-gray-800";
      case "emerald":
        return "bg-emerald-500 dark:bg-emerald-500";
      default:
        return "bg-gray-300 dark:bg-gray-800";
    }
  };

  return (
    <div className="flex gap-0.5">
      <div className={`h-3.5 w-1 rounded-sm ${getBarClass(0)}`} />
      <div className={`h-3.5 w-1 rounded-sm ${getBarClass(1)}`} />
      <div className={`h-3.5 w-1 rounded-sm ${getBarClass(2)}`} />
    </div>
  );
}

const data = [
  { date: "Jan 24", value: 23 },
  { date: "Feb 24", value: 31 },
  { date: "Mar 24", value: 46 },
  { date: "Apr 24", value: 46 },
  { date: "May 24", value: 39 },
  { date: "May 24", value: 65 },
];

const data2 = [
  { date: "Jan 24", value: 10.3 },
  { date: "Feb 24", value: 33.2 },
  { date: "Mar 24", value: 27.1 },
  { date: "Apr 24", value: 19.3 },
  { date: "May 24", value: 24.4 },
  { date: "May 24", value: 14.3 },
];

const data3 = [
  { date: "Jan 24", value: 8 },
  { date: "Feb 24", value: 9 },
  { date: "Mar 24", value: 6 },
  { date: "Apr 24", value: 5 },
  { date: "May 24", value: 12 },
  { date: "May 24", value: 9 },
];

const data4 = [
  { date: "Jan 24", value: 89.1 },
  { date: "Feb 24", value: 78.4 },
  { date: "Mar 24", value: 65.5 },
  { date: "Apr 24", value: 72.3 },
  { date: "May 24", value: 92.1 },
  { date: "May 24", value: 56.1 },
];

export default function Page() {
  return (
    <>
      <section>
        <div className="p-6">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
            Overview
          </h1>
          <dl className="mt-6 flex flex-wrap items-center gap-12">
            <div>
              <dt className="text-sm text-gray-500 dark:text-gray-500">
                Lead-to-Quote Ratio
              </dt>
              <dd className="mt-1.5 flex items-center gap-2">
                <Indicator number={0.61} />
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  59.8% - 450
                  <span className="text-gray-400 dark:text-gray-600">/752</span>
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500 dark:text-gray-500">
                Project Load
              </dt>
              <dd className="mt-1.5 flex items-center gap-2">
                <Indicator number={0.24} />
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  12.9% - 129
                  <span className="text-gray-400 dark:text-gray-600">/1K</span>
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500 dark:text-gray-500">
                Win Probability
              </dt>
              <dd className="mt-1.5 flex items-center gap-2">
                <Indicator number={0.8} />
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  85.1% - 280
                  <span className="text-gray-400 dark:text-gray-600">/329</span>
                </p>
              </dd>
            </div>
          </dl>
        </div>
        <Tabs defaultValue="tab2" className="mt-4">
          <TabsList className="px-6 gap-x-4">
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Monitoring</TabsTrigger>
            <TabsTrigger value="tab3">Approval Workflows</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            {/* @chris: to be moved as Filterbar.tsx */}
            <div className="p-6 flex items-center justify-between">
              <Input
                type="search"
                placeholder="Search quotes..."
                className="sm:w-64 [&>input]:py-1.5"
              />
              <div className="flex items-center gap-2">
                <Tabs defaultValue="all">
                  <TabsList variant="solid">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="Drafted">Drafted</TabsTrigger>
                    <TabsTrigger value="Sent">Sent</TabsTrigger>
                    <TabsTrigger value="Closed">Closed</TabsTrigger>
                  </TabsList>
                </Tabs>
                <Select>
                  <SelectTrigger className="py-1.5 w-44">
                    <SelectValue placeholder="Assigned to..." />
                  </SelectTrigger>
                  <SelectContent align="end">
                    <SelectItem value="1">Severin Landolt</SelectItem>
                    <SelectItem value="2">Christopher Kindl</SelectItem>
                    <SelectItem value="3">Emma Stone</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="secondary" className="py-1.5 gap-2">
                  <Download
                    className="-ml-0.5 size-4 shrink-0 text-gray-400 dark:text-gray-600"
                    aria-hidden="true"
                  />
                  Export
                </Button>
              </div>
            </div>
            {/* @chris: to be moved as DataTable.tsx */}
            <div className="flow-root border-t border-gray-200 dark:border-gray-800">
              <div className="inline-block w-full">
                <table className="min-w-full">
                  <thead className="bg-white">
                    <tr className="divide-x divide-gray-200 dark:divide-gray-800">
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Company
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Deal Size
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Win Probability
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Project Duration
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Assigned
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 pl-3 pr-4 sm:pr-6 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {quotes.map((quote) => (
                      <Fragment key={quote.region}>
                        <tr className="border-t border-gray-200">
                          <th
                            scope="colgroup"
                            colSpan={6}
                            className="bg-gray-50 py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-400 sm:pl-6"
                          >
                            {quote.region}
                            <span className="ml-2 font-medium text-gray-500 dark:text-gray-500">
                              {quote.project.length}
                            </span>
                          </th>
                        </tr>
                        {quote.project.map((item, itemIdx) => (
                          <tr
                            key={item.company}
                            className={cx(
                              // itemIdx === 0 ? "border-gray-200" : "border-gray-200",
                              "border-t border-gray-200 dark:border-gray-800",
                              "divide-x divide-gray-200 dark:divide-gray-800"
                            )}
                          >
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {item.company}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {item.size}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {item.probability}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {item.duration}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <div className="flex -space-x-1 overflow-hidden">
                                {item.assigned.map((name, nameIdx) => (
                                  <span
                                    key={nameIdx}
                                    className={cx(
                                      getRandomColor(name.initials),
                                      "inline-flex text-xs items-center justify-center size-5 rounded-full text-white font-medium dark:text-white ring-2 ring-white dark:ring-[#090E1A]"
                                    )}
                                  >
                                    {name.initials}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="whitespace-nowrap pl-3 pr-4 text-sm sm:pr-6">
                              <Badge
                                variant={
                                  item.status === "Closed"
                                    ? "success"
                                    : item.status === "Drafted"
                                    ? "neutral"
                                    : item.status === "Sent"
                                    ? "default"
                                    : "default"
                                }
                                className="rounded-full"
                              >
                                <span
                                  className={cx(
                                    "size-1.5 shrink-0 rounded-full",
                                    "bg-gray-500 dark:bg-gray-500",
                                    {
                                      "bg-emerald-600 dark:bg-emerald-400":
                                        item.status === "Closed",
                                    },
                                    {
                                      "bg-gray-500 dark:bg-gray-500":
                                        item.status === "Drafted",
                                    },
                                    {
                                      "bg-blue-500 dark:bg-blue-500":
                                        item.status === "Sent",
                                    }
                                  )}
                                  aria-hidden="true"
                                />
                                {item.status}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div className="p-6 flex items-center justify-between">
              <Select defaultValue="365-days">
                <SelectTrigger className="py-1.5 w-44">
                  <SelectValue placeholder="Assigned to..." />
                </SelectTrigger>
                <SelectContent align="end">
                  <SelectItem value="30-days">Last 30 days</SelectItem>
                  <SelectItem value="90-days">Last 90 days</SelectItem>
                  <SelectItem value="180-days">Last 180 days</SelectItem>
                  <SelectItem value="365-days">Last 365 days</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="secondary" className="py-1.5 gap-2">
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
                  categories={["value"]}
                  showLegend={false}
                  yAxisWidth={45}
                  yAxisLabel="Number of inherent risks"
                  barCategoryGap="20%"
                  onValueChange={(v) => console.log(v)}
                  className="mt-6 h-56"
                />
              </div>
              <div className="p-4">
                <dt className="text-sm text-gray-900 dark:text-gray-50 font-semibold">
                  Lead-to-Quote time
                </dt>
                <dd className="mt-0.5 text-sm text-gray-500 dark:text-gray-500">
                  Analysis of the duration from lead generation to quote
                  issuance
                </dd>
                <BarChart
                  data={data2}
                  index="date"
                  categories={["value"]}
                  showLegend={false}
                  yAxisWidth={45}
                  yAxisLabel="Working days (d)"
                  barCategoryGap="20%"
                  className="mt-6 h-56"
                />
              </div>
              <div className="p-4">
                <dt className="text-sm text-gray-900 dark:text-gray-50 font-semibold">
                  ESG impact
                </dt>
                <dd className="mt-0.5 text-sm text-gray-500 dark:text-gray-500">
                  Evaluation of environmental, social, and governance factors
                  over time,
                </dd>
                <BarChart
                  data={data3}
                  index="date"
                  categories={["value"]}
                  showLegend={false}
                  yAxisWidth={45}
                  yAxisLabel="# of dimensions impacted"
                  barCategoryGap="20%"
                  className="mt-6 h-56"
                />
              </div>
              <div className="p-4">
                <dt className="text-sm text-gray-900 dark:text-gray-50 font-semibold">
                  Bidder density
                </dt>
                <dd className="mt-0.5 text-sm text-gray-500 dark:text-gray-500">
                  Density and competition levels of bidders over time
                </dd>
                <BarChart
                  data={data4}
                  index="date"
                  categories={["value"]}
                  showLegend={false}
                  valueFormatter={(number: number) =>
                    `${Intl.NumberFormat().format(number).toString()}%`
                  }
                  yAxisWidth={45}
                  yAxisLabel="Competition density (%)"
                  barCategoryGap="20%"
                  className="mt-6 h-56"
                />
              </div>
            </dl>
          </TabsContent>
          <TabsContent value="tab3"></TabsContent>
        </Tabs>
      </section>
    </>
  );
}
