import type { Metadata } from "next";
import Link from "next/link";

import ArtPanel from "@/components/ArtPanel";
import BadgeItem from "@/components/BadgeItem";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "درباره ما",
  description:
    "درباره اعتماد دانه شیر کوه — تأمین دانه و خوراک دام و طیور در شهرک صنعتی یزد مهر",
};

/**
 * صفحه درباره ما
 */
export default function AboutPage(): JSX.Element {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">درباره ما</p>
          <h1>اعتماد دانه</h1>
          <p>در شهرک صنعتی یزد مهر، در خدمت دامداران و مرغداران یزد</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">نام ما</p>
            <h2
              style={{
                margin: "0 0 0.9rem",
                fontSize: "1.5rem",
                fontWeight: 800,
              }}
            >
              دانه‌ای که به آن اعتماد می‌شود
            </h2>
            <p style={{ color: "var(--ink-muted)", margin: 0 }}>
              اعتماد دانه در شهرک صنعتی یزد مهر فعالیت می‌کند و نام خود را از دل
              کوه شیرکوه، همسایه دیرین یزد، گرفته است. تمرکز ما روی تأمین دانه
              و خوراک دام و طیور با کیفیت مناسب و پاسخگویی مستقیم به مشتریان است.
            </p>
          </div>
          <ArtPanel />
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>اصول کاری ما</h2>
          </div>
          <div className="value-grid">
            <BadgeItem
              description="توجه به کیفیت مواد اولیه در تمام مراحل تولید"
              title="کیفیت"
              variant="value"
              icon={
                <svg
                  fill="none"
                  height="20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              }
            />
            <BadgeItem
              description="ارتباط شفاف و پایدار با دامداران و مرغداران"
              title="اعتماد"
              variant="value"
              icon={
                <svg
                  fill="none"
                  height="20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />
            <BadgeItem
              description="پایبندی به تعهدات در تحویل و کیفیت محصول"
              title="مسئولیت‌پذیری"
              variant="value"
              icon={
                <svg
                  fill="none"
                  height="20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M11 20A7 7 0 0 1 4 13c0-5 4-10 10-11 1 6-1 11-3 13a7 7 0 0 1-7 5" />
                  <path d="M4 20c4-4 8-6 12-12" />
                </svg>
              }
            />
            <BadgeItem
              description="پاسخگویی مستقیم و مشاوره برای انتخاب خوراک مناسب"
              title="مشتری‌مداری"
              variant="value"
              icon={
                <svg
                  fill="none"
                  height="20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M3 7h11v8H3z" />
                  <path d="M14 10h4l3 3v2h-7z" />
                  <circle cx="7" cy="18" r="1.6" />
                  <circle cx="17.5" cy="18" r="1.6" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <CtaBand
            description="با ما در تماس باشید تا سوالات شما را پاسخ دهیم"
            title="می‌خواهید بیشتر بدانید؟"
            actions={
              <Link className="btn btn-primary" href="/contact">
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
            }
          />
        </div>
      </section>
    </>
  );
}
