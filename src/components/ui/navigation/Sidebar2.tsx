"use client"
import { Input } from "@/components/Input"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
} from "@/components/Sidebar"
import { cx, focusRing } from "@/lib/utils"
import { RiArrowDownSFill } from "@remixicon/react"
import Link from "next/link"
import * as React from "react"
import { Logo } from "../../../../public/Logo"
import { NavLink } from "./NavLink"

import { Divider } from "@/components/Divider"

import { BookText, House, PackageSearch } from "lucide-react"

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
] as const

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
] as const

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [openMenus, setOpenMenus] = React.useState<string[]>([
    navigation2[0].name,
    navigation2[1].name,
  ])
  const toggleMenu = (name: string) => {
    setOpenMenus((prev: string[]) =>
      prev.includes(name)
        ? prev.filter((item: string) => item !== name)
        : [...prev, name],
    )
  }
  return (
    <Sidebar
      {...props}
      className="w-64 border-r border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-925"
    >
      <SidebarHeader className="px-3 py-4">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-md bg-white p-1.5 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800">
            {/* @CHRIS: dark mode logo */}
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
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <Input
              type="search"
              placeholder="Search items..."
              className="[&>input]:py-1.5"
            />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="pt-0">
          <SidebarGroupContent>
            <ul role="list" className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href="#"
                    className={cx(
                      item.active
                        ? "text-blue-600 dark:text-blue-500"
                        : "text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
                      "flex items-center justify-between rounded-md p-2 text-sm transition hover:bg-gray-200/50 hover:dark:bg-gray-900",
                      focusRing,
                    )}
                  >
                    <div className="flex items-center gap-x-2.5">
                      <item.icon
                        className="size-[18px] shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
                    {item.notifications && (
                      <span className="inline-flex size-5 items-center justify-center rounded bg-blue-100 text-xs font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-500">
                        {item.notifications}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="px-3">
          <Divider className="my-0 py-0" />
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <ul role="list" className="space-y-4">
              {navigation2.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className={cx(
                      "flex w-full items-center justify-between gap-x-2.5 rounded-md p-2 text-sm text-gray-900 transition hover:bg-gray-200/50 dark:text-gray-400 hover:dark:bg-gray-900 hover:dark:text-gray-50",
                      focusRing,
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
                          ? "rotate-0"
                          : "-rotate-90",
                        "size-5 shrink-0 transform text-gray-400 transition-transform duration-150 ease-in-out dark:text-gray-600",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {item.children && openMenus.includes(item.name) && (
                    <ul
                      role="list"
                      className={cx(
                        "relative space-y-1 border-l border-transparent",
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
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* <SidebarRail /> */}
    </Sidebar>
  )
}
