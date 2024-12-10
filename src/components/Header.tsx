import Link from "next/link";

interface HeaderProps {
  title: string;
  breadcrumb: { label: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ title, breadcrumb }) => {
  return (
    <header className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: "url('/path/to/header-bg.jpg')" }}>
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800">{title}</h1>
        <nav className="text-sm text-gray-500 mt-2 px-8">
          {breadcrumb.map((item, index) => (
            <span key={index}>
              <Link href={item.href}>{item.label}</Link>
              {index < breadcrumb.length - 1 && " / "}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
