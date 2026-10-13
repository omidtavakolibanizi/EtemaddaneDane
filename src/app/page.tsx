import type { Metadata } from "next";
import Link from "next/link";

import AboutPreview from "@/components/AboutPreview";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import StatsBand from "@/components/StatsBand";

export const metadata: Metadata = {
  title: "اعتماد دانه | تأمین‌کننده دانه و خوراک دام و طیور",
  description: "اعتماد دانه — تأمین‌کننده دانه و خوراک دام و طیور، یزد، شهرک صنعتی یزد مهر",
};

const PRODUCTS = [
  {
    title: "خوراک گاو",
    description: "فرمول متعادل برای رشد، شیر و سلامت دام سنگین",
    href: "/product-cow",
    imageSrc: "/images/product-cow.jpg",
  },
  {
    title: "خوراک گوسفند",
    description: "تغذیه علمی برای گله‌های سبک و بازدهی بهتر",
    href: "/products",
    imageSrc: "/images/product-sheep.jpg",
  },
  {
    title: "خوراک طیور",
    description: "رشد یکنواخت و سلامت گله‌های مرغ و طیور",
    href: "/product-poultry",
    imageSrc: "/images/product-poultry.jpg",
  },
  {
    title: "خوراک آبزیان",
    description: "فرمول‌های مناسب پرورش ماهی و آبزیان",
    href: "/products",
    imageSrc: "/images/product-fish.jpg",
  },
  {
    title: "خوراک حیوانات خانگی",
    description: "تغذیه کامل برای سگ و گربه با مواد مغذی",
    href: "/products",
    imageSrc: "/images/product-pets.jpg",
  },
  {
    title: "خوراک شتر",
    description: "ترکیب تخصصی متناسب با نیاز دام شتر",
    href: "/products",
    imageSrc: "/images/product-camel.jpg",
  },
] as const;

/**
 * صفحه اصلی سایت اعتماد دانه
 */
export default function HomePage(): JSX.Element {
  return (
    <>
      <HeroSection />

      <section className="products-section" id="products">
        <div className="wrap">
          <div className="section-head">
            <span aria-hidden="true" className="section-leaf">
              <svg
                fill="none"
                height="28"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.6"
                viewBox="0 0 24 24"
                width="28"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 6 17 2 17 2c0 6-3 8-6 8" />
                <path d="M12.5 9.5c1.5 1.2 3.5 3.5 3.5 7" />
              </svg>
            </span>
            <h2>محصولات ما</h2>
            <p>خوراک دام و طیور با فرمولاسیون علمی، متناسب با هر مرحله رشد و نوع پرورش</p>
          </div>

          <div className="product-grid product-grid-6">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.title}
                description={product.description}
                href={product.href}
                imageAlt={product.title}
                imageSrc={product.imageSrc}
                title={product.title}
              />
            ))}
          </div>

          <div className="section-cta">
            <Link className="btn btn-primary" href="/products">
              مشاهده همه محصولات
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
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <StatsBand />

      <AboutPreview />
    </>
  );
}
