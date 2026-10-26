"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import { PostInquiry } from "@/endpoints/Inquiries";

import type { TInquiryFormProps } from "./InquiryForm.type";

type TStatus = "idle" | "loading" | "success" | "error";

/**
 * فرم ثبت درخواست سفارش / استعلام قیمت
 */
export function InquiryForm({ className, productSlug }: TInquiryFormProps): JSX.Element {
  const [status, setStatus] = useState<TStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await PostInquiry({
        request: {
          body: {
            full_name: String(formData.get("full_name") || "").trim(),
            phone: String(formData.get("phone") || "").trim(),
            product: productSlug || String(formData.get("product") || "").trim() || undefined,
            quantity: String(formData.get("quantity") || "").trim() || undefined,
            province: String(formData.get("province") || "").trim() || undefined,
            message: String(formData.get("message") || "").trim() || undefined,
          },
        },
      });

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("ارسال درخواست ناموفق بود. لطفاً دوباره تلاش کنید.");
    }
  }

  return (
    <form className={`inquiry-form ${className || ""}`} onSubmit={handleSubmit}>
      <div className="inquiry-form-grid">
        <label className="inquiry-field">
          <span>نام و نام خانوادگی</span>
          <input required autoComplete="name" name="full_name" type="text" />
        </label>

        <label className="inquiry-field">
          <span>شماره موبایل</span>
          <input
            required
            autoComplete="tel"
            className="ltr"
            inputMode="tel"
            name="phone"
            placeholder="09123456789"
            type="tel"
          />
        </label>

        {!productSlug ? (
          <label className="inquiry-field">
            <span>محصول (اختیاری)</span>
            <input name="product" placeholder="slug محصول" type="text" />
          </label>
        ) : null}

        <label className="inquiry-field">
          <span>مقدار سفارش</span>
          <input name="quantity" placeholder="مثلاً ۲ تن" type="text" />
        </label>

        <label className="inquiry-field">
          <span>استان</span>
          <input name="province" type="text" />
        </label>

        <label className="inquiry-field inquiry-field-full">
          <span>پیام</span>
          <textarea name="message" rows={4} />
        </label>
      </div>

      {status === "success" ? (
        <p className="inquiry-feedback is-success" role="status">
          درخواست شما ثبت شد. به‌زودی با شما تماس می‌گیریم.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="inquiry-feedback is-error" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button className="btn btn-primary" disabled={status === "loading"} type="submit">
        {status === "loading" ? "در حال ارسال..." : "ثبت درخواست"}
      </button>
    </form>
  );
}

export default InquiryForm;
