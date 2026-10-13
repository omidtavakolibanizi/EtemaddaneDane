import type { Metadata } from "next";
import Image from "next/image";

import ContactRow from "@/components/ContactRow";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "راه‌های ارتباطی با اعتماد دانه شیر کوه — تلفن، ایمیل، آدرس کارخانه و اینستاگرام",
};

/**
 * صفحه تماس با ما
 */
export default function ContactPage(): JSX.Element {
  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero-media">
          <Image fill priority alt="" sizes="100vw" src="/images/hero-factory.jpg" />
          <div className="detail-hero-overlay" />
        </div>
        <div className="wrap detail-hero-inner">
          <p className="section-tag">تماس با ما</p>
          <h1>راه‌های ارتباطی</h1>
          <p>آماده پاسخگویی به سوالات و سفارش‌های شما هستیم</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap tight">
          <div className="contact-list">
            <ContactRow
              isLtr
              href="tel:+989134588060"
              label="تلفن"
              value="0913 458 8060"
              icon={
                <svg
                  fill="none"
                  height="19"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="19"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              }
            />
            <ContactRow
              isLtr
              href="mailto:etemaddane@gmail.com"
              label="ایمیل"
              value="etemaddane@gmail.com"
              icon={
                <svg
                  fill="none"
                  height="19"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="19"
                >
                  <rect height="16" rx="2" width="20" x="2" y="4" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              }
            />
            <ContactRow
              href="https://maps.google.com/?q=شهرک+صنعتی+یزد+مهر"
              label="آدرس"
              value="یزد، شهرک صنعتی یزد مهر"
              icon={
                <svg
                  fill="none"
                  height="19"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="19"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
            />
            <ContactRow
              isLtr
              href="https://instagram.com/etemaddane"
              label="اینستاگرام"
              value="etemaddane"
              icon={
                <svg
                  fill="none"
                  height="19"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="19"
                >
                  <rect height="20" rx="5" width="20" x="2" y="2" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
