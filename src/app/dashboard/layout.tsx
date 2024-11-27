"use client";
import React from "react";

import { cx } from "@/lib/utils";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/navigation/Breadcrumbs";
import { Sidebar } from "@/components/ui/navigation/Sidebar";
import { MetricsCards } from "@/components/ui/homepage/MetricsCards";
import { TabNavigation, TabNavigationLink } from "@/components/TabNavigation";
import { PanelRightClose, PanelRightOpen } from "lucide-react";
import { siteConfig } from "../siteConfig";
import { usePathname } from "next/navigation";

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
      <div
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
            <div
              className="h-5 w-px bg-gray-200 dark:bg-gray-800"
              aria-hidden="true"
            />
            <Breadcrumbs />
          </div>
          <div className="p-6">
            <MetricsCards />
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
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
