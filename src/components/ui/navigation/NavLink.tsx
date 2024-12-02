import { cx } from "@/lib/utils"
import Link from "next/link"

export function NavLink({
  href,
  children,
  active = false,
  isAnchorLink = false,
}: {
  href: string
  children: React.ReactNode
  active?: boolean
  isAnchorLink?: boolean
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cx(
        "relative flex gap-2 py-1.5 pr-3 text-base transition sm:text-sm",
        isAnchorLink ? "pl-9" : "pl-4",
        active
          ? "rounded bg-white text-blue-600 shadow ring-1 ring-gray-200 dark:bg-gray-900 dark:text-blue-500 dark:ring-gray-800"
          : "text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
      )}
    >
      {active && (
        <div
          className="absolute left-4 top-1/2 h-5 w-px -translate-y-1/2 bg-blue-500 dark:bg-blue-500"
          aria-hidden="true"
        />
      )}
      {children}
    </Link>
  )
}
