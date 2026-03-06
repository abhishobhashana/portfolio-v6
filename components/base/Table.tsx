"use client";

import { useState } from "react";

export type Column<T> = {
  key: keyof T;
  header: string;
  sortable?: boolean;
  render?: (value: any, row: T) => React.ReactNode;
};

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
};

export default function Table<T extends Record<string, any>>({
  data,
  columns,
  loading = false,
}: TableProps<T>) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;

    const aValue = a[sortKey];
    const bValue = b[sortKey];

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="w-full overflow-x-auto bg-[rgb(36,36,38)]">
      <table className="w-full text-sm">
        <thead className="bg-secondary">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                onClick={() => col.sortable && handleSort(col.key)}
                className={`lg:first:pl-8 px-4 py-2 text-left font-semibold text-gray last:border-r-0 border-r-[0.1px] border-b-[0.1px] border-[rgb(44,44,46)] ${
                  col.sortable ? "cursor-pointer select-none" : ""
                }`}
              >
                {col.header}
                {sortKey === col.key && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "↑" : "↓"}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-6 text-center text-gray-500"
              >
                Loading...
              </td>
            </tr>
          ) : sortedData.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-6 text-center text-gray-500"
              >
                No data available
              </td>
            </tr>
          ) : (
            sortedData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="font-medium even:bg-[rgb(44,44,46)] odd:bg-[rgb(36,36,38)] hover:bg-gray-50 transition"
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={String(col.key)}
                    className="lg:first:pl-8 px-4 py-2 text-gray first:text-white"
                  >
                    {col.render
                      ? col.render(row[col.key], row)
                      : String(row[col.key])}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
