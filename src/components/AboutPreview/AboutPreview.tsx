import Image from "next/image";
import Link from "next/link";

import type { TAboutPreviewProps } from "./AboutPreview.type";

const HIGHLIGHTS = [
  {
    title: "تیم متخصص",
    description: "کارشناسان تغذیه دام و طیور",
    icon: (
      <svg
        fill="none"
        height="22"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
        width="22"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "کنترل کیفیت سخت‌گیرانه",
    description: "آزمایش در هر مرحله تولید",
    icon: (
      <svg
        fill="none"
        height="22"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
        width="22"
      >
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "فناوری پیشرفته",
    description: "خطوط تولید مدرن و به‌روز",
    icon: (
      <svg
        fill="none"
        height="22"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
        width="22"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    ),
  },
  {
    title: "تجهیزات مدرن",
    description: "ماشین‌آلات صنعتی نسل جدید",
    icon: (
      <svg
        fill="none"
        height="22"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
        width="22"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
] as const;

/**
 * پیش‌نمایش درباره ما در صفحه اصلی
 */
export function AboutPreview({ className }: TAboutPreviewProps): JSX.Element {
  return (
    <section className={`about-preview ${className || ""}`} id="about-preview">
      <div className="wrap about-preview-grid">
        <div className="about-preview-media">
          <Image
            fill
            alt="نمای کارخانه و ناوگان حمل اعتماد دانه"
            className="about-preview-image"
            sizes="(max-width: 900px) 100vw, 50vw"
            src="/images/about-factory.jpg"
          />
          <span aria-hidden="true" className="about-preview-play">
            <svg fill="currentColor" height="28" viewBox="0 0 24 24" width="28">
              <path d="M8.5 7.5v9l8-4.5-8-4.5z" />
            </svg>
          </span>
        </div>

        <div className="about-preview-copy">
          <p className="section-tag">درباره ما</p>
          <h2>کیفیت، تخصص و تعهد ما برای آینده‌ای بهتر</h2>
          <p className="about-preview-text">
            اعتماد دانه در شهرک صنعتی یزد مهر، با تکیه بر دانش تخصصی و فناوری روز، خوراک دام و طیور
            را با استانداردهای بالا تولید می‌کند. هدف ما رشد پایدار دامداری و مرغداری‌های استان و
            سراسر کشور است.
          </p>

          <div className="about-highlights">
            {HIGHLIGHTS.map((item) => (
              <div key={item.title} className="about-highlight">
                <span className="about-highlight-icon">{item.icon}</span>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>

          <Link className="btn btn-primary" href="/about">
            بیشتر درباره ما
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
  );
}

export default AboutPreview;
