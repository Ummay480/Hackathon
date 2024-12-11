"use client"
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href: string;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-sm text-gray-500">
      {items.map((item, index) => (
        <span key={index}>
          <Link href={item.href} className="hover:text-gray-800">
            {item.label}
          </Link>
          {index < items.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
