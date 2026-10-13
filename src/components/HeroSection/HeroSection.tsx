"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import type { THeroSectionProps } from "./HeroSection.type";

const SLIDES = [
  {
    image: "/images/hero-factory.jpg",
    title: "بزرگ‌ترین و به‌روزترین کارخانه خوراک دام و طیور یزد",
    subtitle:
      "با بهره‌گیری از فناوری‌های پیشرفته، خوراکی سالم و مغذی برای رشد و سلامت دام و طیور شما تولید می‌کنیم.",
    alt: "نمای کارخانه تولید خوراک دام و طیور اعتماد دانه",
  },
  {
    image: "/images/hero-factory-2.jpg",
    title: "تولید خوراک با استانداردهای ملی و کیفیت تضمین‌شده",
    subtitle:
      "از انتخاب مواد اولیه تا بسته‌بندی نهایی، هر مرحله زیر نظارت دقیق کنترل کیفیت انجام می‌شود.",
    alt: "سیلوها و خطوط تولید کارخانه اعتماد دانه",
  },
  {
    image: "/images/hero-factory-3.jpg",
    title: "همراه مطمئن دامداران و مرغداران سراسر کشور",
    subtitle: "تحویل منظم، مشاوره تخصصی و پشتیبانی مستقیم برای انتخاب بهترین خوراک گله شما.",
    alt: "انبار و محصولات خوراک دام و طیور اعتماد دانه",
  },
] as const;

const FEATURES = [
  {
    title: "کیفیت برتر",
    description: "استانداردهای سخت‌گیرانه کنترل کیفیت",
    icon: (
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
        <circle cx="12" cy="8" r="5" />
        <path d="M8.2 13.2 7 22l5-2.5L17 22l-1.2-8.8" />
      </svg>
    ),
  },
  {
    title: "مواد اولیه ممتاز",
    description: "انتخاب بهترین دانه‌ها و نهاده‌ها",
    icon: (
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
    ),
  },
  {
    title: "تکنولوژی روز دنیا",
    description: "خطوط تولید پیشرفته و به‌روز",
    icon: (
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
        <rect height="8" rx="1" width="14" x="5" y="9" />
        <path d="M9 9V6h6v3" />
        <path d="M8 13h2M14 13h2M8 16h8" />
      </svg>
    ),
  },
] as const;

/**
 * بخش هیرو صفحه اصلی با اسلایدر و CTA
 */
export function HeroSection({ className }: THeroSectionProps): JSX.Element {
  /* States */
  const [active, setActive] = useState(0);

  /* Effects */
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  /* Const */
  const slide = SLIDES[active];

  return (
    <section className={`home-hero ${className || ""}`}>
      <div className="home-hero-media">
        {SLIDES.map((item, index) => (
          <div
            key={item.image}
            aria-hidden={index !== active}
            className={`home-hero-slide ${index === active ? "is-active" : ""}`}
          >
            <Image
              fill
              alt={item.alt}
              className="home-hero-image"
              priority={index === 0}
              sizes="100vw"
              src={item.image}
            />
          </div>
        ))}
        <div className="home-hero-overlay" />
      </div>

      <div className="wrap home-hero-content">
        <div key={active} className="home-hero-copy">
          <h1 className="home-hero-title">{slide.title}</h1>
          <p className="home-hero-sub">{slide.subtitle}</p>
          <div className="home-hero-actions">
            <Link className="btn btn-primary" href="/about">
              درباره ما بیشتر بدانید
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
            <Link className="btn btn-hero-outline" href="/contact">
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

        <div className="home-hero-side">
          <div aria-label="اسلایدهای هیرو" className="home-hero-dots">
            {SLIDES.map((item, index) => (
              <button
                key={item.image}
                aria-current={index === active ? "true" : undefined}
                aria-label={`اسلاید ${index + 1}`}
                className={index === active ? "is-active" : undefined}
                type="button"
                onClick={() => setActive(index)}
              />
            ))}
          </div>

          <a className="home-hero-video" href="#about-preview">
            <span aria-hidden="true" className="home-hero-video-btn">
              <svg fill="currentColor" height="22" viewBox="0 0 24 24" width="22">
                <path d="M8.5 7.5v9l8-4.5-8-4.5z" />
              </svg>
            </span>
            <span className="home-hero-video-text">مشاهده ویدیو تور مجازی کارخانه</span>
          </a>
        </div>
      </div>

      <div className="home-hero-features">
        <div className="wrap home-hero-features-inner">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="home-hero-feature">
              <span className="home-hero-feature-icon">{feature.icon}</span>
              <div>
                <strong>{feature.title}</strong>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
