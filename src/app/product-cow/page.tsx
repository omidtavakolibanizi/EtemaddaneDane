import type { Metadata } from "next";
import Link from "next/link";

import CtaBand from "@/components/CtaBand";
import ProductVisual from "@/components/ProductVisual";

export const metadata: Metadata = {
  title: "خوراک دام",
  description:
    "خوراک دام اعتماد دانه — فرمول‌بندی متعادل برای رشد و سلامت بهتر دام سنگین و سبک",
};

/**
 * صفحه اختصاصی خوراک دام
 */
export default function ProductCowPage(): JSX.Element {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <Link className="back-link" href="/products">
            <svg
              fill="none"
              height="14"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="14"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            بازگشت به محصولات
          </Link>
          <p className="eyebrow">محصولات</p>
          <h1>خوراک دام</h1>
          <p>فرمول‌بندی متعادل برای رشد و سلامت بهتر دام سنگین و سبک</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap two-col">
          <ProductVisual type="cow" />
          <div>
            <p>
              خوراک دام اعتماد دانه برای مصرف در دوره‌های مختلف رشد، نگهداری و
              شیردهی طراحی شده است. ترکیب مواد اولیه با کنترل کیفیت انجام می‌شود
              تا هم رشد بهتر دام و هم صرفه اقتصادی برای دامدار حاصل شود.
            </p>
            <ul
              style={{
                margin: "0.9rem 0 0",
                paddingInlineStart: "1.2rem",
                color: "var(--ink-muted)",
                fontSize: "0.92rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.35rem",
              }}
            >
              <li>مناسب دوره‌های مختلف رشد و شیردهی</li>
              <li>فرمول‌بندی بر پایه نیاز تغذیه‌ای دام</li>
              <li>مواد اولیه با کنترل کیفیت</li>
            </ul>
          </div>
        </div>

        <div className="wrap">
          <ul className="detail-specs">
            <li>
              <svg
                fill="none"
                height="18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="18"
              >
                <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>مواد اولیه با کنترل کیفیت در تمام مراحل</span>
            </li>
            <li>
              <svg
                fill="none"
                height="18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="18"
              >
                <path d="M3 7h11v8H3z" />
                <path d="M14 10h4l3 3v2h-7z" />
                <circle cx="7" cy="18" r="1.6" />
                <circle cx="17.5" cy="18" r="1.6" />
              </svg>
              <span>امکان تحویل و هماهنگی ارسال برای دامداری‌ها</span>
            </li>
            <li>
              <svg
                fill="none"
                height="18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="18"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>مشاوره رایگان برای انتخاب فرمول مناسب گله شما</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="price-box">
            <div className="price-text">
              <h3>قیمت و سفارش</h3>
              <p>
                قیمت خوراک بسته به میزان سفارش و شرایط بازار متغیر است. برای
                اطلاع از قیمت روز و راهنمایی خرید با ما تماس بگیرید.
              </p>
            </div>
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
              تماس برای قیمت
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ display: "flex", justifyContent: "center" }}>
          <Link className="detail-cross" href="/product-poultry">
            <svg
              fill="none"
              height="18"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="18"
            >
              <path d="M4 15c0-4 3-8 8-8 3 0 5 1.5 6 3l2-1-1 2.5c.6.7 1 1.6 1 2.5 0 3-3 5-7 5-1 0-2-.1-2.8-.4" />
              <path d="M9 15c-1.8 1.6-3.5 2-5 2 1-.8 1.7-1.7 2-2.7" />
              <circle cx="15" cy="10" fill="currentColor" r="0.6" stroke="none" />
            </svg>
            مشاهده خوراک طیور
          </Link>
        </div>
      </section>

      <section>
        <div className="wrap">
          <CtaBand
            description="تیم ما سفارش شما را ثبت و هماهنگی ارسال را انجام می‌دهد"
            title="برای ثبت سفارش تماس بگیرید"
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
                    <rect height="20" rx="5" width="20" x="2" y="2" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
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
