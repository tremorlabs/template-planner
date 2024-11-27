import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="ml-2">
        <ol role="list" className="text-sm flex items-center space-x-3">
          <li className="flex">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 hover:dark:text-gray-300 transition"
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
    </>
  );
}
