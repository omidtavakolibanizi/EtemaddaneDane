import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "خوراک دام",
  description: "خوراک دام اعتماد دانه — فرمول‌بندی متعادل برای رشد و سلامت بهتر دام سنگین و سبک",
};

/**
 * صفحه اختصاصی خوراک دام
 */
export default function ProductCowPage(): JSX.Element {
  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero-media">
          <Image fill priority alt="" sizes="100vw" src="/images/hero-factory-2.jpg" />
          <div className="detail-hero-overlay" />
        </div>
        <div className="wrap detail-hero-inner">
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
          <p className="section-tag">محصولات</p>
          <h1>خوراک دام</h1>
          <p>فرمول‌بندی متعادل برای رشد و سلامت بهتر دام سنگین و سبک</p>
        </div>
      </section>

      <section>
        <div className="wrap detail-layout">
          <div className="detail-media">
            <Image
              fill
              alt="خوراک گاو و دام سنگین"
              sizes="(max-width: 900px) 100vw, 50vw"
              src="/images/product-cow.jpg"
            />
          </div>
          <div className="detail-copy">
            <h2>تغذیه علمی برای رشد، شیر و سلامت گله</h2>
            <p>
              خوراک دام اعتماد دانه برای مصرف در دوره‌های مختلف رشد، نگهداری و شیردهی طراحی شده است.
              ترکیب مواد اولیه با کنترل کیفیت انجام می‌شود تا هم رشد بهتر دام و هم صرفه اقتصادی برای
              دامدار حاصل شود.
            </p>
            <ul className="detail-list">
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
                  <path d="m9 12 2 2 4-4" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
                مناسب دوره‌های مختلف رشد و شیردهی
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
                  <path d="m9 12 2 2 4-4" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
                فرمول‌بندی بر پایه نیاز تغذیه‌ای دام
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
                  <path d="m9 12 2 2 4-4" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
                مواد اولیه با کنترل کیفیت
              </li>
            </ul>
          </div>
        </div>

        <div className="wrap" style={{ marginTop: "2.4rem" }}>
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
                قیمت خوراک بسته به میزان سفارش و شرایط بازار متغیر است. برای اطلاع از قیمت روز و
                راهنمایی خرید با ما تماس بگیرید.
              </p>
            </div>
            <a className="btn btn-primary" href="tel:+989134588060">
              تماس برای قیمت
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ display: "flex", justifyContent: "center" }}>
          <Link className="detail-cross" href="/product-poultry">
            مشاهده خوراک طیور
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
      </section>

      <section>
        <div className="wrap">
          <CtaBand
            description="تیم ما سفارش شما را ثبت و هماهنگی ارسال را انجام می‌دهد"
            title="برای ثبت سفارش تماس بگیرید"
            actions={
              <>
                <a className="btn btn-primary" href="tel:+989134588060">
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
