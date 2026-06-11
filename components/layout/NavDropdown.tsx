import Link from "next/link";

export type NavDropdownItem = { label: string; href: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  /** Wider panel and scroll for long lists (e.g. countries) */
  scrollable?: boolean;
};

export function NavDropdown({ label, href, items, scrollable }: NavDropdownProps) {
  return (
    <div className="group relative">
      <Link
        href={href}
        className="inline-flex min-h-[44px] items-center gap-1 rounded-[4px] px-2 py-2 text-sm text-[#374151] hover:bg-[#FDF5F0] hover:text-[#3D1A1A]"
      >
        {label}
        <svg className="h-4 w-4 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
      <div
        className={`pointer-events-none invisible absolute left-0 top-full z-50 max-w-[min(100vw-2rem,calc(100vw-2rem))] pt-1 opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 ${scrollable ? "min-w-[280px]" : "min-w-[240px]"}`}
      >
        <ul
          className={`rounded-[4px] border border-[#E8D0C0] bg-white py-2 shadow-[0_4px_16px_rgba(0,0,0,0.1)] ${scrollable ? "max-h-[min(70vh,22rem)] overflow-y-auto" : ""}`}
        >
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-[44px] items-center px-4 py-2.5 text-sm text-[#374151] hover:bg-[#FDF5F0] hover:text-[#3D1A1A]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
