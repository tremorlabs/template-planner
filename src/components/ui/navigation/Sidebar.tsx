"use client";
import React from "react";
import { Logo } from "../../../../public/Logo";
import { siteConfig } from "@/app/siteConfig";
import { Tooltip } from "@/components/Tooltip";
import { cx, focusRing } from "@/lib/utils";
import {
  BarChartBig,
  Compass,
  PanelRightClose,
  PanelRightOpen,
  Settings2,
  Table2,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import MobileSidebar from "./MobileSidebar";
import { UserProfileDesktop, UserProfileMobile } from "./UserProfile";
import { RiArrowDownSFill } from "@remixicon/react";

function NavLink({
  href,
  children,
  active = false,
  isAnchorLink = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  isAnchorLink?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cx(
        "relative flex gap-2 py-1.5 pr-3 text-sm transition",
        isAnchorLink ? "pl-9" : "pl-4",
        active
          ? "text-blue-600 dark:text-blue-500 bg-white rounded ring-1 ring-gray-200 shadow"
          : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-50"
      )}
    >
      {active && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-px bg-blue-500" />
      )}
      {children}
    </Link>
  );
}

const navigation = [
  {
    name: "Reports",
    href: siteConfig.baseLinks.reports,
    icon: BarChartBig,
    children: [
      { name: "Data Workspace", href: "/reports/data" },
      { name: "AI Workspace", href: "/reports/ai" },
      { name: "Test Lab", href: "/reports/test" },
    ],
  },
  {
    name: "Transactions",
    href: siteConfig.baseLinks.transactions,
    icon: Table2,
    children: [
      { name: "Test pipeline", href: "/workspaces/page-1" },
      { name: "API playground", href: "/workspaces/page-2" },
      { name: "Live workspace", href: "/workspaces/page-3" },
    ],
  },
  {
    name: "Settings",
    href: siteConfig.baseLinks.settings.audit,
    icon: Settings2,
    children: [
      { name: "Test pipeline", href: "/compliance/page-1" },
      { name: "API playground", href: "/compliance/page-2" },
      { name: "Live workspace", href: "/rcompliance/page-3" },
    ],
  },
] as const;

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export function Sidebar({ isCollapsed, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = React.useState<string[]>([]);
  const isActive = (itemHref: string) => {
    if (itemHref === siteConfig.baseLinks.settings.audit) {
      return pathname.startsWith("/settings");
    }
    return pathname === itemHref || pathname.startsWith(itemHref);
  };

  const toggleMenu = (name: string) => {
    setOpenMenus((prev: string[]) =>
      prev.includes(name)
        ? prev.filter((item: string) => item !== name)
        : [...prev, name]
    );
  };

  return (
    <>
      {/* sidebar (lg+) */}
      <nav
        className={cx(
          isCollapsed ? "lg:w-[60px]" : "lg:w-64",
          "hidden overflow-x-hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col"
        )}
      >
        {/* <span
              className={cx(
                "text-sm font-semibold text-gray-900 transition-opacity dark:text-gray-50",
                isCollapsed ? "hidden" : "block"
              )}
            ></span> */}
        <aside className="flex grow flex-col gap-y-4 overflow-y-auto whitespace-nowrap px-3 py-4">
          <div className="flex items-center gap-3.5">
            <span className="flex items-center justify-center size-9 p-1.5 bg-white rounded-md ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm">
              <Logo className="text-blue-500 dark:text-blue-500" />
            </span>
            <div>
              <span className="block text-sm font-semibold text-gray-900 dark:text-gray-50">
                Acme Corp.
              </span>
              <span className="block text-xs text-gray-900 dark:text-gray-50">
                Premium Starter Plan
              </span>
            </div>
          </div>
          <nav
            // @CHRIS: aria-labels
            aria-label="core navigation links"
            className="mt-2 flex flex-1 flex-col space-y-10 ease transform-gpu transition-all duration-100 will-change-transform"
          >
            <ul role="list" className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className={cx(
                      "flex w-full items-center justify-between gap-x-2.5 font-medium rounded-md p-2 text-sm text-gray-900 dark:text-gray-300 transition-opacity hover:bg-gray-200/50 hover:dark:bg-gray-900",
                      focusRing
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      {/* <item.icon
                        className="size-[18px] shrink-0"
                        aria-hidden="true"
                      /> */}
                      {item.name}
                    </div>
                    <RiArrowDownSFill
                      className={cx(
                        openMenus.includes(item.name)
                          ? "rotate-180"
                          : "rotate-0",
                        "size-5 shrink-0 text-gray-400 dark:text-gray-600 transform transition-transform duration-200 ease-in-out"
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {item.children && openMenus.includes(item.name) && (
                    <ul
                      role="list"
                      className={cx(
                        "relative border-l border-transparent space-y-1",
                        isCollapsed ? "opacity-0" : "opacity-100"
                      )}
                    >
                      <div className="absolute inset-y-0 left-4 w-px bg-gray-300 dark:bg-gray-900" />
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <NavLink
                            href={child.href}
                            isAnchorLink
                            active={isActive(child.href)}
                          >
                            {child.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto border-t border-gray-200 pt-3 dark:border-gray-800">
            <UserProfileDesktop isCollapsed={isCollapsed} />
          </div>
        </aside>
      </nav>
      {/* top navbar (xs-lg) */}
      <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6 lg:hidden dark:border-gray-800 dark:bg-gray-950">
        <span
          className={cx(
            "font-semibold text-gray-900 sm:text-sm dark:text-gray-50",
            isCollapsed ? "opacity-0" : "opacity-100"
          )}
        >
          <Link aria-label="Home Link" href="/">
            Acme Corp.
          </Link>
        </span>
        {/* <div className="flex items-center gap-1 sm:gap-2">
          <UserProfileMobile />
          <MobileSidebar />
        </div> */}
      </div>
    </>
  );
}
