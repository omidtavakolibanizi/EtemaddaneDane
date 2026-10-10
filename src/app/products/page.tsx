import type { Metadata } from "next";
import Link from "next/link";

import CtaBand from "@/components/CtaBand";
import ProductCard from "@/components/ProductCard";
import ProductVisual from "@/components/ProductVisual";

export const metadata: Metadata = {
  title: "محصولات",
  description:
    "محصولات اعتماد دانه — خوراک باکیفیت دام سنگین و سبک، و خوراک پرورشی طیور",
};

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
          <p>
            دو دسته اصلی محصولات اعتماد دانه، با فرمول‌بندی متعادل و مواد اولیه
            باکیفیت
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="product-grid">
            <ProductCard
              description="خوراک متعادل برای دام سنگین و سبک، با هدف رشد بهتر و حفظ سلامت گله."
              href="/product-cow"
              style={{ flexBasis: "340px" }}
              title="خوراک دام"
              visual={<ProductVisual type="cow" />}
              features={[
                "مناسب دوره‌های مختلف رشد و شیردهی",
                "فرمول‌بندی بر پایه نیاز تغذیه‌ای دام",
                "مواد اولیه با کنترل کیفیت",
              ]}
            />

            <ProductCard
              description="خوراک متعادل برای رشد یکنواخت و سلامت گله‌های طیور صنعتی و خانگی."
              href="/product-poultry"
              style={{ flexBasis: "340px" }}
              title="خوراک طیور"
              visual={<ProductVisual type="poultry" />}
              features={[
                "مناسب دوره‌های پرورش و تخم‌گذاری",
                "دانه‌بندی مناسب برای مصرف بهتر",
                "مواد اولیه با کنترل کیفیت",
              ]}
            />
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
                <Link className="btn btn-ghost" href="/contact">
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
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                  راه‌های ارتباطی
                </Link>
              </>
            }
          />
        </div>
      </section>
    </>
  );
}
