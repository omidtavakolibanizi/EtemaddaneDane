import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

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

async function ProductDetailContent({
  params,
}: TProductPageProps): Promise<JSX.Element> {
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
  const imageSrc = product.image || "/images/product-cow.jpg";

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
          <p className="section-tag">{product.category.name}</p>
          <h1>{product.name}</h1>
          {product.short_description ? <p>{product.short_description}</p> : null}
        </div>
      </section>

      <section>
        <div className="wrap detail-layout">
          <div className="detail-media">
            <Image
              fill
              alt={product.image_alt || product.name}
              sizes="(max-width: 900px) 100vw, 50vw"
              src={imageSrc}
            />
          </div>
          <div className="detail-copy">
            <h2>{product.name}</h2>
            {product.description ? <p>{product.description}</p> : null}

            {features.length > 0 ? (
              <ul className="detail-features">
                {features.map((feature) => (
                  <li key={feature.text}>{feature.text}</li>
                ))}
              </ul>
            ) : null}

            {specs.length > 0 ? (
              <>
                <h3>مشخصات</h3>
                <ul className="detail-features">
                  {specs.map((spec) => (
                    <li key={spec.text}>{spec.text}</li>
                  ))}
                </ul>
              </>
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
