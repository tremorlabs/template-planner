"use client";
import { cx } from "@/lib/utils";
import { Input } from "@/components/Input";
import { Tabs, TabsList, TabsTrigger } from "@/components/Tabs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/Select";
import {
  Table,
  TableRoot,
  TableHeaderCell,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/Table";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { Download } from "lucide-react";
import { Fragment } from "react";

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

export default function Overview() {
  return (
    <>
      {/* @chris: to be moved as Filterbar.tsx */}
      <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <Input
          type="search"
          placeholder="Search quotes..."
          className="sm:w-64 [&>input]:py-1.5"
        />
        <div className="flex flex-col sm:flex-row items-center gap-2">
          {/* @CHRIS: consider to integrate */}
          {/* <Tabs defaultValue="all">
            <TabsList variant="solid">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="Drafted">Drafted</TabsTrigger>
              <TabsTrigger value="Sent">Sent</TabsTrigger>
              <TabsTrigger value="Closed">Closed</TabsTrigger>
            </TabsList>
          </Tabs> */}
          <Select>
            <SelectTrigger className="py-1.5 w-full sm:w-44">
              <SelectValue placeholder="Assigned to..." />
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="1">Severin Landolt</SelectItem>
              <SelectItem value="2">Christopher Kindl</SelectItem>
              <SelectItem value="3">Emma Stone</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="secondary"
            className="w-full sm:w-fit text-base sm:text-sm py-1.5 gap-2"
          >
            <Download
              className="-ml-0.5 size-4 shrink-0 text-gray-400 dark:text-gray-600"
              aria-hidden="true"
            />
            Export
          </Button>
        </div>
      </div>
      <TableRoot className="border-t border-gray-200 dark:border-gray-800">
        <Table>
          <TableHead>
            {/* <tr className="divide-x divide-gray-200 dark:divide-gray-800"> */}
            <TableRow>
              {/* <TableRow className="divide-x divide-gray-200 dark:divide-gray-800"> */}
              <TableHeaderCell>Company</TableHeaderCell>
              <TableHeaderCell>Deal Size</TableHeaderCell>
              <TableHeaderCell>Win Probability</TableHeaderCell>
              <TableHeaderCell>Project Duration</TableHeaderCell>
              <TableHeaderCell>Assigned</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableRow>
            {/* </tr> */}
          </TableHead>
          {/* <tbody className="bg-white"> */}
          <TableBody>
            {quotes.map((quote) => (
              <Fragment key={quote.region}>
                <TableRow>
                  {/* <tr className="border-t border-gray-200"> */}
                  <th
                    scope="colgroup"
                    colSpan={6}
                    className="bg-gray-50 dark:bg-gray-900 py-3 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-400 sm:pl-6"
                  >
                    {quote.region}
                    <span className="ml-2 font-medium text-gray-500 dark:text-gray-500">
                      {quote.project.length}
                    </span>
                  </th>
                </TableRow>
                {quote.project.map((item, idx) => (
                  <TableRow key={idx}>
                    {/* // <tr
                    //   key={item.company}
                    //   className={cx(
                    //     // itemIdx === 0 ? "border-gray-200" : "border-gray-200",
                    //     "border-t border-gray-200 dark:border-gray-800",
                    //     "divide-x divide-gray-200 dark:divide-gray-800"
                    //   )}
                    // > */}
                    <TableCell>{item.company}</TableCell>
                    <TableCell>{item.size}</TableCell>
                    <TableCell>{item.probability}</TableCell>
                    <TableCell>{item.duration}</TableCell>
                    <TableCell>
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
                    </TableCell>
                    {/* <TableCell className="whitespace-nowrap pl-3 pr-4 text-sm sm:pr-6"></TableCell> */}
                    <TableCell>
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
                    </TableCell>
                    {/* </tr> */}
                  </TableRow>
                ))}
              </Fragment>
            ))}
          </TableBody>
          {/* </tbody> */}
        </Table>
      </TableRoot>
      {/* </div>
      </div> */}
    </>
  );
}
