import { Button } from "@/components/Button"
import { Divider } from "@/components/Divider"
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/Drawer"
import { Input } from "@/components/Input"
import { cx, focusRing } from "@/lib/utils"
import { BookText, House, Menu, PackageSearch } from "lucide-react"
import Link from "next/link"
import { NavLink } from "./NavLink"

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

export default function MobileSidebar() {
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            aria-label="open sidebar"
            className="group flex items-center rounded-md p-1.5 text-sm font-medium hover:bg-gray-100 data-[state=open]:bg-gray-100 data-[state=open]:bg-gray-400/10 hover:dark:bg-gray-400/10"
          >
            <Menu
              className="size-6 shrink-0 text-gray-700 hover:text-gray-900 dark:text-gray-300 hover:dark:text-gray-50"
              aria-hidden="true"
            />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="sm:max-w-lg">
          <DrawerHeader>
            <DrawerTitle>Innovex Systems</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <nav
              aria-label="core mobile navigation links"
              className="mt-2 flex flex-col space-y-4"
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
                        item.active
                          ? "text-blue-600 dark:text-blue-500"
                          : "text-gray-900 dark:text-gray-400 hover:dark:text-gray-50",
                        "flex items-center justify-between rounded-md p-2 text-base transition hover:bg-gray-200/50 sm:text-sm hover:dark:bg-gray-900",
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
                        <span className="inline-flex size-5 items-center justify-center rounded bg-blue-100 text-sm font-medium text-blue-600 sm:text-xs dark:bg-blue-500/10 dark:text-blue-500">
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
                    <div className="flex items-center gap-x-2.5 p-2 text-base text-gray-900 sm:text-sm dark:text-gray-400">
                      <item.icon
                        className="size-[18px] shrink-0"
                        aria-hidden="true"
                      />
                      {item.name}
                    </div>
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
                  </li>
                ))}
              </ul>
            </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
