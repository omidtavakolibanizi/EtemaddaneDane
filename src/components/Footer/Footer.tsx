import Image from "next/image";
import Link from "next/link";

import { formatPhoneDisplay, formatPhoneTel, instagramHandle } from "@/utils/formatPhone";

import type { TFooterProps } from "./Footer.type";

/**
 * فوتر اصلی سایت اعتماد دانه — اطلاعات تماس از API
 */
export function Footer({ className, contact }: TFooterProps): JSX.Element {
  const companyName = contact?.companyName || "اعتماد دانه";
  const address = contact?.address;
  const phone = contact?.phone;
  const email = contact?.email;
  const instagramUrl = contact?.instagramUrl;
  const igHandle = instagramUrl ? instagramHandle(instagramUrl) : null;

  return (
    <footer className={`site-footer ${className || ""}`}>
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Image
            alt={`نشان ${companyName}`}
            className="footer-logo-img"
            height={64}
            src="/logo.png"
            width={90}
          />
          <div>
            <h4>{companyName}</h4>
            {address ? <p>{address}</p> : null}
          </div>
        </div>

        <div className="footer-col">
          <h5>صفحات</h5>
          <Link href="/">صفحه اصلی</Link>
          <Link href="/products">محصولات</Link>
          <Link href="/about">درباره ما</Link>
          <Link href="/contact">تماس با ما</Link>
        </div>

        <div className="footer-col">
          <h5>ارتباط با ما</h5>
          {phone ? (
            <a className="footer-contact-link" href={formatPhoneTel(phone)}>
              <svg
                fill="none"
                height="15"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="15"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="ltr">{formatPhoneDisplay(phone)}</span>
            </a>
          ) : null}
          {email ? (
            <a className="footer-contact-link" href={`mailto:${email}`}>
              <svg
                fill="none"
                height="15"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="15"
              >
                <rect height="16" rx="2" width="20" x="2" y="4" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              <span className="ltr">{email}</span>
            </a>
          ) : null}
          {instagramUrl ? (
            <a
              className="footer-contact-link"
              href={instagramUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                fill="none"
                height="15"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="15"
              >
                <rect height="20" rx="5" width="20" x="2" y="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="ltr">{igHandle || "instagram"}</span>
            </a>
          ) : null}
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© ۱۴۰۵ {companyName} · یزد</span>
      </div>
    </footer>
  );
}

export default Footer;
