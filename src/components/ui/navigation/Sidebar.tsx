"use client";
import React from "react";
import { Logo } from "../../../../public/Logo";
import { siteConfig } from "@/app/siteConfig";
import { cx, focusRing } from "@/lib/utils";
import { Settings2, PackageSearch, BookText, House, Inbox } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/Input";
import { usePathname } from "next/navigation";
// import MobileSidebar from "./MobileSidebar";
import { UserProfileDesktop, UserProfileMobile } from "./UserProfile";
import { RiArrowDownSFill } from "@remixicon/react";
import { Divider } from "@/components/Divider";

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
    name: "Home",
    href: "#",
    icon: House,
    notifications: false,
    active: false,
  },
  {
    name: "Inbox",
    href: "#",
    icon: PackageSearch,
    notifications: 2,
    active: false,
  },
] as const;

const navigation2 = [
  {
    name: "Sales",
    href: "#",
    icon: BookText,
    children: [
      {
        name: "Quotes",
        href: "#",
        active: true,
      },
      {
        name: "Orders",
        href: "#",
        active: false,
      },
      {
        name: "Insights & Reports",
        href: "#",
        active: false,
      },
    ],
  },
  {
    name: "Products",
    href: "#",
    icon: PackageSearch,
    children: [
      {
        name: "Items",
        href: "#",
        active: false,
      },
      {
        name: "Variants",
        href: "#",
        active: false,
      },
      {
        name: "Suppliers",
        href: "#",
        active: false,
      },
    ],
  },
] as const;

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export function Sidebar({ isCollapsed, toggleSidebar }: SidebarProps) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = React.useState<string[]>([
    navigation2[0].name,
    navigation2[1].name,
  ]);

  // @chris: old
  const isActive = (itemHref: string) => {
    if (itemHref === siteConfig.baseLinks.dashboard.overview) {
      return pathname.startsWith("/overview");
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
          isCollapsed ? "lg:hidden" : "lg:w-64",
          "hidden overflow-x-hidden bg-gray-50 dark:bg-gray-925 lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col border-r border-gray-200 dark:border-gray-800"
        )}
      >
        <aside
          className={cx(
            isCollapsed ? "lg:hidden" : "lg:flex",
            "flex grow flex-col gap-y-4 overflow-y-auto whitespace-nowrap px-3 py-4"
          )}
        >
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center size-9 p-1.5 bg-white rounded-md ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm">
              <Logo className="text-blue-500 dark:text-blue-500" />
            </span>
            <div>
              <span className="block text-sm font-semibold text-gray-900 dark:text-gray-50">
                Innovex Systems
              </span>
              <span className="block text-xs text-gray-900 dark:text-gray-50">
                Premium Starter Plan
              </span>
            </div>
          </div>
          <nav
            // @CHRIS: aria-labels
            aria-label="core navigation links"
            className={cx(
              isCollapsed ? "hidden" : "flex",
              "mt-2 flex-col space-y-4"
            )}
          >
            <Input
              type="search"
              placeholder="Search items..."
              className="[&>input]:py-1.5"
            />
            <ul role="list" className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href="#"
                    className={cx(
                      isActive(item.href)
                        ? "text-blue-600 dark:text-blue-500"
                        : "text-gray-900 dark:text-gray-50",
                      "flex items-center justify-between rounded-md p-2 text-sm transition-opacity hover:bg-gray-200/50 hover:dark:bg-gray-900",
                      focusRing
                    )}
                    // @CHRIS: check transition-opacity really needed
                  >
                    <div className="flex items-center gap-x-2.5">
                      <item.icon
                        className="size-[18px] shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
                    {item.notifications && (
                      <span className="inline-flex text-xs items-center justify-center size-5 bg-blue-100 text-blue-600 dark:text-blue-400 dark:bg-blue-500/10 rounded font-medium">
                        {item.notifications}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <Divider />
            <ul role="list" className="space-y-4">
              {navigation2.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className={cx(
                      "flex w-full items-center justify-between gap-x-2.5 rounded-md p-2 text-sm text-gray-900 dark:text-gray-50 transition-opacity hover:bg-gray-200/50 hover:dark:bg-gray-900",
                      focusRing
                    )}
                    // @CHRIS: check transition-opacity really needed
                  >
                    <div className="flex items-center gap-2.5">
                      <item.icon
                        className="size-[18px] shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
                    <RiArrowDownSFill
                      className={cx(
                        openMenus.includes(item.name)
                          ? "rotate-180"
                          : "rotate-0",
                        "size-5 shrink-0 text-gray-400 dark:text-gray-600 transform transition-transform duration-150 ease-in-out"
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
                      <div className="absolute inset-y-0 left-4 w-px bg-gray-300 dark:bg-gray-800" />
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <NavLink
                            href={child.href}
                            isAnchorLink
                            active={child.active}
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
            Innovex Systems
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
