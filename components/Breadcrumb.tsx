/**
 * Breadcrumb.tsx
 * Accessible breadcrumb navigation with schema markup
 */

import Link from "next/link";
import { BreadcrumbSchema } from "./StructuredData";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

export default function Breadcrumb({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  const schemaItems = items.map((item) => ({
    name: item.name,
    url: item.href || "https://nexocore.es",
  }));

  return (
    <>
      <BreadcrumbSchema items={schemaItems} />
      <nav
        className="bg-black/50 px-4 py-2 text-sm text-gray-400"
        aria-label="Breadcrumb"
      >
        <ol className="flex flex-wrap gap-2 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <span className="text-gray-300">{item.name}</span>
              )}
              {index < items.length - 1 && (
                <span className="text-gray-600">/</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
