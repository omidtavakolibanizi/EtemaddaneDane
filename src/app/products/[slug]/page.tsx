import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GetCatalogProduct, GetCatalogProducts } from "@/endpoints/Catalog";

import CtaBand from "@/components/CtaBand";
import InquiryForm from "@/components/InquiryForm";

const PLACEHOLDER_SLUG = "__placeholder__";

type TProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  try {
    const products = await GetCatalogProducts();
    if (products.results.length > 0) {
      return products.results.map((product) => ({ slug: product.slug }));
    }
  } catch {
    /* API empty/unavailable at build time */
  }

  return [{ slug: PLACEHOLDER_SLUG }];
}

export async function generateMetadata({ params }: TProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug === PLACEHOLDER_SLUG) {
    return { title: "محصول" };
  }

  try {
    const product = await GetCatalogProduct({ slug });
    return {
      title: product.name,
      description: product.short_description || product.description || product.name,
    };
  } catch {
    return { title: "محصول" };
  }
}

async function ProductDetailContent({ params }: TProductPageProps): Promise<JSX.Element> {
  /* Const */
  const { slug } = await params;

  if (slug === PLACEHOLDER_SLUG) {
    notFound();
  }

  let product;
  try {
    product = await GetCatalogProduct({ slug });
  } catch {
    notFound();
  }

  const features = product.features.filter((item) => !item.kind || item.kind === "feature");
  const specs = product.features.filter((item) => item.kind === "spec");
  const imageSrc = product.image || undefined;

  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero-media">
          {imageSrc ? <Image fill priority alt="" sizes="100vw" src={imageSrc} /> : null}
          <div className="detail-hero-overlay" />
        </div>
        <div className="wrap detail-hero-inner">
          <p className="section-tag">{product.category.name}</p>
          <h1>{product.name}</h1>
          {product.short_description ? <p>{product.short_description}</p> : null}
        </div>
      </section>

      <section>
        <div className="wrap detail-layout">
          {imageSrc ? (
            <div className="detail-media">
              <Image
                fill
                alt={product.image_alt || product.name}
                sizes="(max-width: 900px) 100vw, 50vw"
                src={imageSrc}
              />
            </div>
          ) : null}
          <div className="detail-copy">
            <h2>{product.name}</h2>

            {product.description ? (
              <div className="detail-block">
                <h3>توضیحات</h3>
                <div className="detail-prose">
                  {product.description
                    .split(/\n{2,}/)
                    .map((paragraph) => paragraph.trim())
                    .filter(Boolean)
                    .map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
              </div>
            ) : null}

            {features.length > 0 ? (
              <div className="detail-block">
                <h3>ویژگی‌ها</h3>
                <ul className="detail-list">
                  {features.map((feature) => (
                    <li key={feature.text}>
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
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {specs.length > 0 ? (
              <div className="detail-block">
                <h3>مشخصات</h3>
                <ul className="detail-specs">
                  {specs.map((spec) => (
                    <li key={spec.text}>
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
                        <path d="M9 11l3 3L22 4" />
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                      </svg>
                      {spec.text}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap tight">
          <div className="inquiry-section">
            <h2>استعلام قیمت این محصول</h2>
            <p>اطلاعات تماس خود را وارد کنید تا برای همین محصول با شما هماهنگ کنیم.</p>
            <InquiryForm productSlug={product.slug} />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <CtaBand
            description="برای مشاوره انتخاب خوراک مناسب گله‌تان آماده‌ایم"
            title="نیاز به راهنمایی دارید؟"
            actions={
              <Link className="btn btn-primary" href="/contact">
                تماس با ما
              </Link>
            }
          />
        </div>
      </section>
    </>
  );
}

/**
 * صفحه جزئیات محصول از API
 */
export default function ProductDetailPage(props: TProductPageProps): JSX.Element {
  return (
    <Suspense
      fallback={
        <section className="detail-hero">
          <div className="wrap detail-hero-inner">
            <p className="section-tag">محصولات</p>
            <h1>در حال بارگذاری...</h1>
          </div>
        </section>
      }
    >
      <ProductDetailContent {...props} />
    </Suspense>
  );
}
