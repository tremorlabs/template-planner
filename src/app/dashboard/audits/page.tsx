"use client";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { SlidersHorizontal, Link } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion";
import { RiCheckboxCircleFill, RiErrorWarningFill } from "@remixicon/react";

const getStatusIcon = (status: string) => {
  if (status === "complete") {
    return (
      <RiCheckboxCircleFill className="size-[18px] text-emerald-600 dark:text-emerald-400 shrink-0" />
    );
  }
  return (
    <RiErrorWarningFill className="size-[18px] text-red-600 dark:text-red-400 shrink-0" />
  );
};

const sections = [
  {
    id: "item-1",
    title: "Code of conduct",
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
];

export default function Audits() {
  return (
    <>
      <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <Input
          type="search"
          placeholder="Search audits..."
          className="sm:w-64 [&>input]:py-1.5"
        />
        <Button
          variant="secondary"
          className="py-1.5 text-base sm:text-sm gap-2 w-full sm:w-fit"
        >
          <SlidersHorizontal
            className="-ml-0.5 size-4 shrink-0 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
          />
          Filters
        </Button>
      </div>
      <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-800">
        {/* <h2 className="mt-4 font-medium text-gray-900 dark:text-gray-50">
                Certifications and reports
              </h2> */}
        <Accordion type="multiple" className="mt-3">
          {sections.map((section) => (
            <AccordionItem key={section.id} value={section.id}>
              <AccordionTrigger className="py-5">
                <p className="flex items-center w-full justify-between pr-4">
                  <span className="flex items-center gap-2.5">
                    <span>{section.title}</span>
                    <span className="text-xs inline-flex items-center font-medium bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                      SOC2
                    </span>
                  </span>
                  <span className="flex items-center gap-x-2">
                    {getStatusIcon(section.status)}
                    {section.progress.current}/{section.progress.total}
                  </span>
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mt-2 grid grid-cols-2 gap-6">
                  <div>
                    <p className="flex items-center justify-between text-sm font-medium text-gray-900 dark:text-gray-50">
                      <span>Audit round</span>
                      <span>Auditor</span>
                    </p>
                    <ul className="mt-1 text-sm text-gray-700 dark:text-gray-300 divide-y divide-gray-200 dark:divide-gray-800">
                      {section.auditDates.map((audit, index) => (
                        <li
                          key={index}
                          className="py-2.5 flex items-center justify-between"
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
                    <ul className="mt-1 text-gray-700 dark:text-gray-300 divide-y divide-gray-200 dark:divide-gray-800">
                      {section.documents.map((doc, index) => (
                        <li
                          key={index}
                          className="py-2.5 text-sm flex items-center justify-between"
                        >
                          <a
                            href="#"
                            className="hover:underline hover:underline-offset-4 text-blue-500 dark:text-blue-500 flex items-center gap-2"
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
                              className="hover:text-gray-900 hover:dark:text-gray-50"
                            >
                              Edit
                            </button>
                            <span
                              className="h-4 w-px bg-gray-300 dark:bg-gray-700"
                              aria-hidden="true"
                            />
                            <button
                              type="button"
                              className="hover:text-gray-900 hover:dark:text-gray-50"
                            >
                              Re-Upload
                            </button>
                          </div>
                          {/* <span
                                  className={`px-2 py-0.5 rounded-full text-xs inline-flex items-center font-medium ${getStatusBadgeStyle(
                                    doc.status
                                  )}`}
                                >
                                  {doc.status}
                                </span> */}
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
    </>
  );
}
