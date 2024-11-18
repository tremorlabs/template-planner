import React from "react";
import { cx } from "@/lib/utils";
import {
  ColumnDef,
  ColumnFiltersState,
  FilterFn,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  useReactTable,
} from "@tanstack/react-table";

interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
}

export function DataTable<TData>({ columns, data }: DataTableProps<TData>) {
  //   const flattenedData = data.flatMap((quote) =>
  //     quote.project.map((project) => ({
  //       ...project,
  //       region: quote.region,
  //       projectCount: quote.project.length,
  //     }))
  //   );

  //   const table = useReactTable({
  //     data: flattenedData,
  //     columns,
  //     getCoreRowModel: getCoreRowModel(),
  //   });

  //   const groupedRows = table.getRowModel().rows.reduce((groups, row) => {
  //     const region = row.original.region
  //     if (!groups[region]) {
  //       groups[region] = {
  //         region,
  //         rows: [],
  //         count: row.original.projectCount
  //       }
  //     }
  //     groups[region].rows.push(row)
  //     return groups
  //   }, {})

  return <>{/* Insert table */}</>;
}
