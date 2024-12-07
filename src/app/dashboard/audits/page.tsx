"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/components/Table"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { RiCheckboxCircleFill, RiErrorWarningFill } from "@remixicon/react"
import { Link, SlidersHorizontal } from "lucide-react"

const getStatusIcon = (status: string) => {
  if (status === "complete") {
    return (
      <RiCheckboxCircleFill className="size-[18px] shrink-0 text-emerald-600 dark:text-emerald-400" />
    )
  }
  return (
    <RiErrorWarningFill className="size-[18px] shrink-0 text-red-600 dark:text-red-400" />
  )
}

const sections = [
  {
    id: "item-1",
    title: "CompTIA Security+",
    certified: "ISO",
    progress: { current: 46, total: 46 },
    status: "complete",
    auditDates: [
      { date: "Dec 10, 2023", auditor: "Max Duster" },
      { date: "Dec 12, 2023", auditor: "Emma Stone" },
    ],
    documents: [
      { name: "policy_overview.xlsx", status: "OK" },
      { name: "employee_guidelines.xlsx", status: "Needs update" },
      { name: "compliance_checklist.xlsx", status: "In audit" },
    ],
  },
  {
    id: "item-2",
    title: "SAFe Certifications",
    certified: "ISO/IEC 27001",
    progress: { current: 32, total: 41 },
    status: "warning",
    auditDates: [
      { date: "Jan 15, 2024", auditor: "Sarah Johnson" },
      { date: "Jan 20, 2024", auditor: "Mike Peters" },
    ],
    documents: [
      { name: "certification_records.xlsx", status: "OK" },
      { name: "training_logs.xlsx", status: "In audit" },
      { name: "assessment_results.xlsx", status: "Needs update" },
    ],
  },
  {
    id: "item-3",
    title: "PMP Certifications",
    certified: "ISO",
    progress: { current: 21, total: 21 },
    status: "complete",
    auditDates: [
      { date: "Feb 5, 2024", auditor: "Lisa Chen" },
      { date: "Feb 8, 2024", auditor: "Tom Wilson" },
    ],
    documents: [
      { name: "project_documents.xlsx", status: "OK" },
      { name: "methodology_guide.xlsx", status: "OK" },
      { name: "best_practices.xlsx", status: "In audit" },
    ],
  },
  {
    id: "item-4",
    title: "Cloud Certifications",
    certified: "SOC 2",
    progress: { current: 21, total: 21 },
    status: "complete",
    auditDates: [
      { date: "Mar 1, 2024", auditor: "Alex Kumar" },
      { date: "Mar 5, 2024", auditor: "Rachel Green" },
    ],
    documents: [
      { name: "aws_certifications.xlsx", status: "OK" },
      { name: "azure_competencies.xlsx", status: "OK" },
      { name: "gcp_credentials.xlsx", status: "In audit" },
      { name: "cloud_security.xlsx", status: "OK" },
    ],
  },
]

const data = [
  //array-start
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "Live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "31.1%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "Live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "81.3%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "Inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40.8%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "Live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "51.4%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "Inactive",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60.4%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "Inactive",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75.9%",
    lastEdited: "24/09/2023 09:15",
  },
  {
    workspace: "sales_by_day_api",
    owner: "John Doe",
    status: "Live",
    costs: "$3,509.00",
    region: "US-West 1",
    capacity: "31.1%",
    lastEdited: "23/09/2023 13:00",
  },
  {
    workspace: "marketing_campaign",
    owner: "Jane Smith",
    status: "Live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "81.3%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "test_environment",
    owner: "David Clark",
    status: "Inactive",
    costs: "$800.00",
    region: "EU-Central 1",
    capacity: "40.8%",
    lastEdited: "25/09/2023 16:20",
  },
  {
    workspace: "sales_campaign",
    owner: "Jane Smith",
    status: "Live",
    costs: "$5,720.00",
    region: "US-East 2",
    capacity: "51.4%",
    lastEdited: "22/09/2023 10:45",
  },
  {
    workspace: "development_env",
    owner: "Mike Johnson",
    status: "Inactive",
    costs: "$4,200.00",
    region: "EU-West 1",
    capacity: "60.4%",
    lastEdited: "21/09/2023 14:30",
  },
  {
    workspace: "new_workspace_1",
    owner: "Alice Brown",
    status: "Inactive",
    costs: "$2,100.00",
    region: "US-West 2",
    capacity: "75.9%",
    lastEdited: "24/09/2023 09:15",
  },
  //array-end
]

export default function Audits() {
  return (
    <>
      <div className="flex flex-col items-center justify-between gap-2 p-6 sm:flex-row">
        <Input
          type="search"
          placeholder="Search audits..."
          className="sm:w-64 [&>input]:py-1.5"
        />
        <Button
          variant="secondary"
          className="w-full gap-2 py-1.5 text-base sm:w-fit sm:text-sm"
        >
          <SlidersHorizontal
            className="-ml-0.5 size-4 shrink-0 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
          />
          Filters
        </Button>
      </div>
      <div className="border-t border-gray-200 px-6 pb-6 dark:border-gray-800">
        {/* <h2 className="mt-4 font-medium text-gray-900 dark:text-gray-50">
                Certifications and reports
              </h2> */}
        <Accordion type="multiple" className="mt-3">
          {sections.map((section) => (
            <AccordionItem key={section.id} value={section.id}>
              <AccordionTrigger className="py-5">
                <p className="flex w-full items-center justify-between pr-4">
                  <span className="flex items-center gap-2.5">
                    <span>{section.title}</span>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-400/10 dark:text-gray-300">
                      {section.certified}
                    </span>
                  </span>
                  <span className="flex items-center gap-x-2">
                    {getStatusIcon(section.status)}
                    {section.progress.current}/{section.progress.total}
                  </span>
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-2 grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <p className="flex items-center justify-between text-sm font-medium text-gray-900 dark:text-gray-50">
                      <span>Audit round</span>
                      <span>Auditor</span>
                    </p>
                    <ul className="mt-1 divide-y divide-gray-200 text-sm text-gray-600 dark:divide-gray-800 dark:text-gray-400">
                      {section.auditDates.map((audit, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between py-2.5"
                        >
                          <span>{audit.date}</span>
                          <span>{audit.auditor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="flex items-center justify-between text-sm font-medium text-gray-900 dark:text-gray-50">
                      <span>Related documents</span>
                      <span>Status</span>
                    </p>
                    <ul className="mt-1 divide-y divide-gray-200 text-gray-600 dark:divide-gray-800 dark:text-gray-400">
                      {section.documents.map((doc, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between py-2.5 text-sm"
                        >
                          <a
                            href="#"
                            className="flex items-center gap-2 text-blue-500 hover:underline hover:underline-offset-4 dark:text-blue-500"
                          >
                            <Link
                              className="size-4 shrink-0"
                              aria-hidden="true"
                            />
                            {doc.name}
                          </a>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              className="hover:text-gray-900 hover:underline hover:underline-offset-4 hover:dark:text-gray-50"
                            >
                              Edit
                            </button>
                            <span
                              className="h-4 w-px bg-gray-300 dark:bg-gray-700"
                              aria-hidden="true"
                            />
                            <button
                              type="button"
                              className="hover:text-gray-900 hover:underline hover:underline-offset-4 hover:dark:text-gray-50"
                            >
                              Re-Upload
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <TableRoot className="mt-8 h-96">
        <Table className="border-separate border-spacing-0 border-transparent">
          <TableHead>
            <TableRow>
              <TableHeaderCell className="sticky top-0 z-10 bg-white dark:bg-gray-950">
                Workspace
              </TableHeaderCell>
              <TableHeaderCell className="sticky top-0 z-10 bg-white dark:bg-gray-950">
                Owner
              </TableHeaderCell>
              <TableHeaderCell className="sticky top-0 z-10 bg-white dark:bg-gray-950">
                Status
              </TableHeaderCell>
              <TableHeaderCell className="sticky top-0 z-10 bg-white dark:bg-gray-950">
                Region
              </TableHeaderCell>
              <TableHeaderCell className="sticky top-0 z-10 bg-white dark:bg-gray-950">
                Capacity
              </TableHeaderCell>
              <TableHeaderCell className="sticky top-0 z-10 bg-white text-right dark:bg-gray-950">
                Last edited
              </TableHeaderCell>
              <TableHeaderCell className="sticky top-0 z-10 bg-white text-right dark:bg-gray-950">
                Costs
              </TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.workspace}>
                <TableCell className="border-b border-gray-200 font-medium text-gray-900 dark:border-gray-800 dark:text-gray-50">
                  {item.workspace}
                </TableCell>
                <TableCell className="border-b border-gray-200 dark:border-gray-800">
                  {item.owner}
                </TableCell>
                <TableCell className="border-b border-gray-200 dark:border-gray-800">
                  {item.status}
                </TableCell>
                <TableCell className="border-b border-gray-200 dark:border-gray-800">
                  {item.region}
                </TableCell>
                <TableCell className="border-b border-gray-200 dark:border-gray-800">
                  {item.capacity}
                </TableCell>
                <TableCell className="border-b border-gray-200 text-right dark:border-gray-800">
                  {item.lastEdited}
                </TableCell>
                <TableCell className="border-b border-gray-200 text-right dark:border-gray-800">
                  {item.costs}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableRoot>
    </>
  )
}
