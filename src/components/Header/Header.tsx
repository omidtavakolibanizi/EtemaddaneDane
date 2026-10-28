"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeToggle from "@/components/ThemeToggle";

import type { THeaderProps } from "./Header.type";

/**
 * هدر و نوار ناوبری اصلی سایت اعتماد دانه
 */
export function Header({ className }: THeaderProps): JSX.Element {
  /* Next */
  const pathname = usePathname();

  /* Const */
  const isProductsActive = pathname === "/products" || pathname.startsWith("/products/");

  return (
    <header className={`site-header ${className || ""}`}>
      <div className="wrap nav-wrap">
        <Link className="nav-brand" href="/">
          <Image
            priority
            alt="نشان اعتماد دانه شیر کوه"
            className="nav-logo-img"
            height={72}
            src="/logo.png"
            width={102}
          />
        </Link>

        <ul className="nav-links">
          <li>
            <Link aria-current={pathname === "/" ? "page" : undefined} href="/">
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link aria-current={pathname === "/about" ? "page" : undefined} href="/about">
              درباره ما
            </Link>
          </li>
          <li>
            <Link aria-current={isProductsActive ? "page" : undefined} href="/products">
              محصولات
            </Link>
          </li>
          <li>
            <Link aria-current={pathname === "/contact" ? "page" : undefined} href="/contact">
              تماس با ما
            </Link>
          </li>
        </ul>

        <div className="nav-end">
          <ThemeToggle />
          <a className="btn btn-primary btn-sm nav-phone" href="tel:+989134588060">
            <svg
              fill="none"
              height="16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="16"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="ltr">۰۹۱۳ ۴۵۸ ۸۰۶۰</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
