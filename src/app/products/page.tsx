import type { Metadata } from "next";
import { Suspense } from "react";

import { GetCatalogCategories, GetCatalogProducts } from "@/endpoints/Catalog";
import { GetSiteContent } from "@/endpoints/Site";
import { FALLBACK_PRODUCTS } from "@/data/fallbackProducts";
import { formatPhoneTel } from "@/utils/formatPhone";
import { safeApi } from "@/utils/safeApi";

import CtaBand from "@/components/CtaBand";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "محصولات",
  description: "محصولات اعتماد دانه — خوراک باکیفیت دام سنگین و سبک، و خوراک پرورشی طیور",
};

async function ProductsContent(): Promise<JSX.Element> {
  /* Const */
  const [products, categories, site] = await Promise.all([
    safeApi(() => GetCatalogProducts(), null),
    safeApi(() => GetCatalogCategories(), []),
    safeApi(() => GetSiteContent(), null),
  ]);

  const apiProducts =
    products?.results?.map((product) => ({
      title: product.name,
      description: product.short_description || product.category.name,
      href: `/products/${product.slug}`,
      imageSrc: product.image || "/images/product-cow.jpg",
      imageAlt: product.image_alt || product.name,
    })) || [];

  const displayProducts = apiProducts.length > 0 ? apiProducts : FALLBACK_PRODUCTS;
  const phone = site?.settings.phone || "09134588060";
  const instagramUrl = site?.settings.instagram_url || "https://instagram.com/etemaddane";

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">محصولات</p>
          <h1>خوراک دام و طیور</h1>
          <p>مجموعه محصولات اعتماد دانه با فرمولاسیون علمی و مواد اولیه باکیفیت</p>
          {categories.length > 0 ? (
            <p className="products-categories">
              {categories.map((category) => category.name).join(" · ")}
            </p>
          ) : null}
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="product-grid product-grid-6">
            {displayProducts.map((product) => (
              <ProductCard
                key={product.title}
                description={product.description}
                href={product.href}
                imageAlt={"imageAlt" in product ? product.imageAlt : product.title}
                imageSrc={product.imageSrc}
                title={product.title}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <CtaBand
            description="راهنمایی برای انتخاب خوراک مناسب دام یا طیور شما"
            title="برای سفارش محصولات با ما تماس بگیرید"
            actions={
              <>
                <a className="btn btn-primary" href={formatPhoneTel(phone)}>
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
                  href={instagramUrl}
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

/**
 * صفحه لیست محصولات
 */
export default function ProductsPage(): JSX.Element {
  return (
    <Suspense
      fallback={
        <section className="page-hero">
          <div className="wrap">
            <p className="eyebrow">محصولات</p>
            <h1>خوراک دام و طیور</h1>
          </div>
        </section>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
