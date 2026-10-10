import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import ArtPanel from "@/components/ArtPanel";
import BadgeItem from "@/components/BadgeItem";
import CtaBand from "@/components/CtaBand";
import Divider from "@/components/Divider";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "اعتماد دانه | تأمین‌کننده دانه و خوراک دام و طیور",
  description:
    "اعتماد دانه — تأمین‌کننده دانه و خوراک دام و طیور، یزد، شهرک صنعتی یزد مهر",
};

/**
 * صفحه اصلی سایت اعتماد دانه
 */
export default function HomePage(): JSX.Element {
  return (
    <>
      {/* هدر بنر و معرفی اصلی */}
      <section className="hero">
        <div className="wrap hero-inner">
          <span className="logo-plate">
            <Image
              priority
              alt="نشان اعتماد دانه شیر کوه"
              height={100}
              src="/logo.png"
              width={100}
            />
          </span>
          <p className="eyebrow">یزد · شهرک صنعتی یزد مهر</p>
          <h1 className="hero-title">تأمین‌کننده دانه و خوراک دام و طیور</h1>
          <p className="hero-sub">
            اعتماد دانه، با تکیه بر اعتماد، در خدمت دامداران و مرغداران یزد است.
          </p>
          <div className="hero-cta">
            <Link className="btn btn-primary" href="/products">
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
              مشاهده محصولات
            </Link>
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              تماس با ما
            </Link>
          </div>
        </div>
      </section>

      {/* جداکننده گرافیکی */}
      <Divider />

      {/* بخش چرا اعتماد دانه */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>چرا اعتماد دانه</h2>
            <p>اصولی که در کار ما تغییر نمی‌کند</p>
          </div>
          <div className="badge-row">
            <BadgeItem
              description="توجه به کیفیت مواد اولیه و بهداشت در تمام مراحل تولید"
              title="کیفیت و بهداشت"
              icon={
                <svg
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              }
            />
            <BadgeItem
              description="ارسال منظم و هماهنگ با نیاز دامداری و مرغداری شما"
              title="تحویل به‌موقع"
              icon={
                <svg
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <path d="M3 7h11v8H3z" />
                  <path d="M14 10h4l3 3v2h-7z" />
                  <circle cx="7" cy="18" r="1.6" />
                  <circle cx="17.5" cy="18" r="1.6" />
                </svg>
              }
            />
            <BadgeItem
              description="پاسخگویی مستقیم و مشاوره برای انتخاب خوراک مناسب"
              title="مشتری‌مداری"
              icon={
                <svg
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* بخش محصولات ما */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>محصولات ما</h2>
            <p>دو دسته اصلی خوراک، متناسب با نیاز دام و طیور</p>
          </div>
          <div className="product-grid">
            <ProductCard
              description="فرمول‌بندی متعادل برای رشد و سلامت بهتر دام سنگین و سبک."
              href="/product-cow"
              title="خوراک دام"
              icon={
                <svg
                  fill="none"
                  height="26"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="26"
                >
                  <path d="M8.5 7c-1.2-1.6-1-3.4.5-4.3" />
                  <path d="M15.5 7c1.2-1.6 1-3.4-.5-4.3" />
                  <path d="M5 10c-1.6.2-2.6 1.4-2.2 3" />
                  <path d="M19 10c1.6.2 2.6 1.4 2.2 3" />
                  <rect height="10.5" rx="5.5" width="12" x="6" y="8" />
                  <circle cx="9.5" cy="13" fill="currentColor" r="0.6" stroke="none" />
                  <circle cx="14.5" cy="13" fill="currentColor" r="0.6" stroke="none" />
                  <rect height="3.4" rx="1.7" width="6.6" x="8.7" y="15.6" />
                  <circle cx="10.6" cy="17.2" fill="currentColor" r="0.45" stroke="none" />
                  <circle cx="13.4" cy="17.2" fill="currentColor" r="0.45" stroke="none" />
                </svg>
              }
            />
            <ProductCard
              description="خوراک متعادل برای رشد یکنواخت و سلامت گله‌های طیور."
              href="/product-poultry"
              title="خوراک طیور"
              icon={
                <svg
                  fill="none"
                  height="26"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="26"
                >
                  <path d="M4 15c0-4 3-8 8-8 3 0 5 1.5 6 3l2-1-1 2.5c.6.7 1 1.6 1 2.5 0 3-3 5-7 5-1 0-2-.1-2.8-.4" />
                  <path d="M9 15c-1.8 1.6-3.5 2-5 2 1-.8 1.7-1.7 2-2.7" />
                  <circle cx="15" cy="10" fill="currentColor" r="0.6" stroke="none" />
                </svg>
              }
            />
          </div>
          <div style={{ textAlign: "center", marginTop: "1.8rem" }}>
            <Link className="btn btn-ghost" href="/products">
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
                <path d="M9 18l6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* بخش درباره ما در صفحه اصلی */}
      <section>
        <div className="wrap two-col">
          <ArtPanel />
          <div>
            <p className="eyebrow">درباره ما</p>
            <h2 style={{ margin: "0 0 0.9rem", fontSize: "1.6rem", fontWeight: 800 }}>
              نامی برای اعتماد
            </h2>
            <p style={{ color: "var(--ink-muted)", margin: "0 0 1.4rem" }}>
              اعتماد دانه در شهرک صنعتی یزد مهر فعالیت می‌کند و نام خود را از دل
              کوه شیرکوه، همسایه دیرین یزد، گرفته است. کیفیت و اعتماد مشتریان،
              اصل کار ماست.
            </p>
            <Link className="btn btn-primary" href="/about">
              بیشتر بدانید
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
            </Link>
          </div>
        </div>
      </section>

      {/* فراخوان تماس و ثبت سفارش */}
      <section>
        <div className="wrap">
          <CtaBand
            description="تیم ما آماده پاسخگویی به سوالات شما درباره خوراک دام و طیور است"
            title="برای سفارش و مشاوره در تماس باشید"
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
