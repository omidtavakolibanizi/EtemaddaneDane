import type { Metadata } from "next";

import CtaBand from "@/components/CtaBand";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "محصولات",
  description: "محصولات اعتماد دانه — خوراک باکیفیت دام سنگین و سبک، و خوراک پرورشی طیور",
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
 * صفحه لیست محصولات
 */
export default function ProductsPage(): JSX.Element {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">محصولات</p>
          <h1>خوراک دام و طیور</h1>
          <p>مجموعه محصولات اعتماد دانه با فرمولاسیون علمی و مواد اولیه باکیفیت</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
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
        </div>
      </section>

      <section>
        <div className="wrap">
          <CtaBand
            description="راهنمایی برای انتخاب خوراک مناسب دام یا طیور شما"
            title="برای سفارش محصولات با ما تماس بگیرید"
            actions={
              <>
                <a className="btn btn-primary" href="tel:+989134588060">
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
                  تماس بگیرید
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://instagram.com/etemaddane"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  اینستاگرام
                </a>
              </>
            }
          />
        </div>
      </section>
    </>
  );
}
