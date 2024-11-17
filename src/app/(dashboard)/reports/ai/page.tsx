"use client";

import { Fragment } from "react";
import { cx } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import { Button } from "@/components/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import { Input } from "@/components/Input";
import { Download } from "lucide-react";

const quotes = [
  {
    status: "Drafted",
    project: [
      {
        company: "Walton Holding",
        size: "50K USD",
        probability: "40%",
        duration: "18 months",
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
    ],
  },
  {
    status: "Sent",
    project: [
      {
        company: "Real Estate Group",
        size: "1.2M USD",
        probability: "60%",
        duration: "6 months",
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
    ],
  },
  {
    status: "Closed",
    project: [
      {
        company: "Liquid Holdings Group",
        size: "5.1M USD",
        probability: "100%",
        duration: "Member",
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
        probability: "100%",
        duration: "18 months",
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
    category = "emerald";
  } else if (number >= 0.3 && number < 0.7) {
    category = "orange";
  } else if (number >= 0.7) {
    category = "red";
  } else {
    category = "gray";
  }

  const getBarClass = (index: number) => {
    switch (category) {
      case "emerald":
        return index < 1
          ? "bg-emerald-500 dark:bg-emerald-500"
          : "bg-gray-300 dark:bg-gray-800";
      case "orange":
        return index < 2
          ? "bg-orange-500 dark:bg-orange-500"
          : "bg-gray-300 dark:bg-gray-800";
      case "red":
        return "bg-red-500 dark:bg-red-500";
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
                Storage Capacity
              </dt>
              <dd className="mt-1.5 flex items-center gap-2">
                <Indicator number={0.61} />
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  61% - 45
                  <span className="text-gray-400 dark:text-gray-600">
                    /100GB
                  </span>
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-gray-500 dark:text-gray-500">
                Usage Capacity
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
                Requests Load
              </dt>
              <dd className="mt-1.5 flex items-center gap-2">
                <Indicator number={0.8} />
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                  99.1% - 99.1K
                  <span className="text-gray-400 dark:text-gray-600">
                    /100K
                  </span>
                </p>
              </dd>
            </div>
          </dl>
        </div>
        <Tabs defaultValue="tab1" className="mt-4">
          <TabsList className="px-6 gap-x-4">
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Monitoring</TabsTrigger>
            <TabsTrigger value="tab3">Security Controls</TabsTrigger>
          </TabsList>
          <div className="p-6">
            <TabsContent value="tab1">
              <div className="flex items-center justify-between">
                <Input
                  type="search"
                  placeholder="Search quotes..."
                  className="sm:w-64 [&>input]:py-1.5"
                />
                <div className="flex items-center gap-2">
                  <Tabs defaultValue="all">
                    <TabsList variant="solid">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="drafted">Drafted</TabsTrigger>
                      <TabsTrigger value="sent">Sent</TabsTrigger>
                      <TabsTrigger value="closed">Closed</TabsTrigger>
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
            </TabsContent>
            <TabsContent value="tab2"></TabsContent>
            <TabsContent value="tab3"></TabsContent>
          </div>
        </Tabs>
        <div className="flow-root border-t border-gray-200 dark:border-gray-800">
          <div className="inline-block w-full py-2">
            <table className="min-w-full">
              <thead className="bg-white">
                <tr>
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
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {quotes.map((quote) => (
                  <Fragment key={quote.status}>
                    <tr className="border-t border-gray-200">
                      <th
                        scope="colgroup"
                        colSpan={6}
                        className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        {quote.status}
                      </th>
                    </tr>
                    {quote.project.map((item, itemIdx) => (
                      <tr
                        key={item.company}
                        className={cx(
                          itemIdx === 0 ? "border-gray-300" : "border-gray-200",
                          "border-t"
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
                          <div className="flex -space-x-0.5 overflow-hidden">
                            {item.assigned.map((name, nameIdx) => (
                              <span
                                key={nameIdx}
                                className={cx(
                                  getRandomColor(name.initials),
                                  "inline-flex text-xs items-center justify-center size-5 rounded text-white font-medium dark:text-white ring-2 ring-white dark:ring-[#090E1A]"
                                )}
                              >
                                {name.initials}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-900"
                          >
                            Edit
                            <span className="sr-only">, {item.company}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
