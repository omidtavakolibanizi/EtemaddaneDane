import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { GetSiteContent } from "@/endpoints/Site";
import { safeApi } from "@/utils/safeApi";

import BadgeItem from "@/components/BadgeItem";
import CtaBand from "@/components/CtaBand";
import StatsBand from "@/components/StatsBand";

import { HOME_STAT_ICONS } from "@/app/page.const";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "درباره اعتماد دانه شیر کوه — تأمین دانه و خوراک دام و طیور در شهرک صنعتی یزد مهر",
};

async function AboutStats(): Promise<JSX.Element | null> {
  /* Const */
  const site = await safeApi(() => GetSiteContent(), null);
  if (!site?.stats?.length) {
    return null;
  }

  const stats = site.stats.map((item, index) => ({
    value: item.value,
    label: item.label,
    icon: HOME_STAT_ICONS[index % HOME_STAT_ICONS.length].icon,
  }));

  return <StatsBand items={stats} />;
}

/**
 * صفحه درباره ما
 */
export default function AboutPage(): JSX.Element {
  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero-media">
          <Image
            fill
            priority
            alt="کارخانه اعتماد دانه"
            sizes="100vw"
            src="/images/about-factory.jpg"
          />
          <div className="detail-hero-overlay" />
        </div>
        <div className="wrap detail-hero-inner">
          <p className="section-tag">درباره ما</p>
          <h1>اعتماد دانه شیر کوه</h1>
          <p>در شهرک صنعتی یزد مهر، در خدمت دامداران و مرغداران یزد و سراسر کشور</p>
        </div>
      </section>

      <section>
        <div className="wrap detail-layout">
          <div className="detail-media detail-media-cover">
            <Image
              fill
              alt="نمای کارخانه و ناوگان حمل اعتماد دانه"
              sizes="(max-width: 900px) 100vw, 50vw"
              src="/images/about-factory.jpg"
            />
          </div>
          <div className="detail-copy">
            <p className="section-tag">نام ما</p>
            <h2>کیفیت، تخصص و تعهد برای آینده‌ای بهتر</h2>
            <p>
              اعتماد دانه در شهرک صنعتی یزد مهر فعالیت می‌کند و نام خود را از دل کوه شیرکوه، همسایه
              دیرین یزد، گرفته است. تمرکز ما روی تولید و تأمین خوراک دام و طیور با کیفیت مناسب،
              فناوری روز و پاسخگویی مستقیم به مشتریان است.
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
                  <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                کنترل کیفیت در تمام مراحل تولید
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
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 6 17 2 17 2c0 6-3 8-6 8" />
                  <path d="M12.5 9.5c1.5 1.2 3.5 3.5 3.5 7" />
                </svg>
                مواد اولیه ممتاز و فرمولاسیون علمی
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
                </svg>
                تیم متخصص تغذیه دام و طیور
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <AboutStats />
      </Suspense>

      <section>
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
            <h2>اصول کاری ما</h2>
            <p>ارزش‌هایی که در هر مرحله تولید و ارتباط با مشتری حفظ می‌کنیم</p>
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
