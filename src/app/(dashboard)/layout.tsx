"use client";
import React from "react";

import { cx } from "@/lib/utils";
import Link from "next/link";
import { Sidebar } from "@/components/ui/navigation/Sidebar";
import { ChevronRight } from "lucide-react";
import { PanelRightClose, PanelRightOpen } from "lucide-react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <main
        className={cx(
          isCollapsed ? "lg:pl-0" : "lg:pl-64",
          "ease transform-gpu transition-all duration-100 will-change-transform"
        )}
      >
        <div className="bg-white lg:border-l lg:border-gray-200 dark:bg-gray-925 lg:dark:border-gray-900 h-screen">
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
                      Web analytics
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
