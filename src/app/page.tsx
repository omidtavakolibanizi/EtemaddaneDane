import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";

import { GetCatalogProducts } from "@/endpoints/Catalog";
import { GetSiteContent } from "@/endpoints/Site";

import AboutPreview from "@/components/AboutPreview";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import StatsBand from "@/components/StatsBand";

import { safeApi } from "@/utils/safeApi";

import { HOME_STAT_ICONS } from "./page.const";

export const metadata: Metadata = {
  title: "اعتماد دانه | تأمین‌کننده دانه و خوراک دام و طیور",
  description: "اعتماد دانه — تأمین‌کننده دانه و خوراک دام و طیور، یزد، شهرک صنعتی یزد مهر",
};

async function HomeHero(): Promise<JSX.Element | null> {
  /* Const */
  const site = await safeApi(() => GetSiteContent(), null);
  const heroSlides =
    site?.hero_slides
      ?.filter((slide) => slide.image && slide.title)
      .map((slide) => ({
        image: slide.image,
        title: slide.title,
        subtitle: slide.subtitle,
        alt: slide.alt || slide.title,
      })) || [];

  if (heroSlides.length === 0) {
    return null;
  }

  return <HeroSection slides={heroSlides} />;
}

async function HomeProducts(): Promise<JSX.Element> {
  /* Const */
  const products = await safeApi(() => GetCatalogProducts(), null);
  const displayProducts =
    products?.results?.map((product) => ({
      title: product.name,
      description: product.short_description || product.category.name,
      href: `/products/${product.slug}`,
      imageSrc: product.image || undefined,
      imageAlt: product.image_alt || product.name,
    })) || [];

  return (
    <section className="products-section" id="products">
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
          <h2>محصولات ما</h2>
          <p>خوراک دام و طیور با فرمولاسیون علمی، متناسب با هر مرحله رشد و نوع پرورش</p>
        </div>

        {displayProducts.length > 0 ? (
          <div className="product-grid product-grid-6">
            {displayProducts.map((product) => (
              <ProductCard
                key={product.title}
                description={product.description}
                href={product.href}
                imageAlt={product.imageAlt}
                imageSrc={product.imageSrc}
                title={product.title}
              />
            ))}
          </div>
        ) : (
          <p className="products-empty">در حال حاضر محصولی برای نمایش وجود ندارد.</p>
        )}

        <div className="section-cta">
          <Link className="btn btn-primary" href="/products">
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
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

async function HomeStats(): Promise<JSX.Element | null> {
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
 * صفحه اصلی سایت اعتماد دانه
 */
export default function HomePage(): JSX.Element {
  return (
    <>
      <Suspense fallback={null}>
        <HomeHero />
      </Suspense>

      <Suspense
        fallback={
          <section className="products-section" id="products">
            <div className="wrap">
              <div className="section-head">
                <h2>محصولات ما</h2>
                <p>در حال بارگذاری...</p>
              </div>
            </div>
          </section>
        }
      >
        <HomeProducts />
      </Suspense>

      <Suspense fallback={null}>
        <HomeStats />
      </Suspense>

      <AboutPreview />
    </>
  );
}
