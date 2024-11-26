"use client";
import React from "react";

import { cx } from "@/lib/utils";
import Link from "next/link";
import { Sidebar } from "@/components/ui/navigation/Sidebar";
import { TabNavigation, TabNavigationLink } from "@/components/TabNavigation";
import { ChevronRight } from "lucide-react";
import { PanelRightClose, PanelRightOpen } from "lucide-react";
import { siteConfig } from "../siteConfig";
import { usePathname } from "next/navigation";

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

const navigation = [
  { name: "Overview", href: siteConfig.baseLinks.dashboard.overview },
  { name: "Monitoring", href: siteConfig.baseLinks.dashboard.monitoring },
  { name: "Audits", href: siteConfig.baseLinks.dashboard.audits },
];

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const pathname = usePathname();
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      {/* @CHRIS: challenge sev */}
      {/* <div className="mx-auto max-w-screen-2xl"> */}
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <main
        className={cx(
          isCollapsed ? "lg:pl-0" : "lg:pl-64",
          "ease transform-gpu transition-all duration-100 will-change-transform"
        )}
      >
        <div className="bg-white dark:bg-gray-925 h-screen">
          <div className="p-4 sticky top-0 z-10 bg-white dark:bg-gray-950 flex items-center gap-3 border-b border-gray-200 dark:border-gray-800">
            <button
              className="group inline-flex rounded-md p-1.5 hover:bg-gray-200/50 hover:dark:bg-gray-900"
              onClick={toggleSidebar}
            >
              {isCollapsed ? (
                <PanelRightClose
                  className="size-[18px] shrink-0 text-gray-700 dark:text-gray-300"
                  aria-hidden="true"
                />
              ) : (
                <PanelRightOpen
                  className="size-[18px] shrink-0 text-gray-700 dark:text-gray-300"
                  aria-hidden="true"
                />
              )}
            </button>
            <div className="h-5 w-px bg-gray-200 dark:bg-gray-800" />
            <nav aria-label="Breadcrumb" className="ml-2">
              <ol role="list" className="text-sm flex items-center space-x-3">
                <li className="flex">
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-500 hover:dark:text-gray-300"
                  >
                    Home
                  </Link>
                </li>
                <ChevronRight
                  className="size-4 shrink-0 text-gray-600 dark:text-gray-400"
                  aria-hidden="true"
                />
                <li className="flex">
                  <div className="flex items-center">
                    <Link
                      href="#"
                      // aria-current={page.current ? 'page' : undefined}
                      className="text-gray-900 dark:text-gray-50"
                    >
                      Quotes
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
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
                    <span className="text-gray-400 dark:text-gray-600">
                      /752
                    </span>
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
                    <span className="text-gray-400 dark:text-gray-600">
                      /1K
                    </span>
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
                    <span className="text-gray-400 dark:text-gray-600">
                      /329
                    </span>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
          <TabNavigation className="mt-6 px-6 gap-x-4">
            {navigation.map((item) => (
              <TabNavigationLink
                key={item.name}
                asChild
                active={pathname === item.href}
              >
                <Link href={item.href}>{item.name}</Link>
              </TabNavigationLink>
            ))}
          </TabNavigation>
          <>{children}</>
        </div>
      </main>
    </>
  );
}
