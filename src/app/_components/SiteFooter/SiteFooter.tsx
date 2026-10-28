import { GetSiteContent } from "@/endpoints/Site";

import Footer from "@/components/Footer";

import { safeApi } from "@/utils/safeApi";

/**
 * فوتر متصل به API محتوای سایت
 */
export default async function SiteFooter(): Promise<JSX.Element> {
  /* Const */
  const site = await safeApi(() => GetSiteContent(), null);
  const settings = site?.settings;

  return (
    <Footer
      contact={{
        companyName: settings?.company_name,
        address: settings?.address,
        phone: settings?.phone,
        email: settings?.email,
        instagramUrl: settings?.instagram_url,
      }}
    />
  );
}
