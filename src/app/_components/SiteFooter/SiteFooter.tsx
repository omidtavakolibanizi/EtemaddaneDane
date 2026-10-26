import { GetSiteContent } from "@/endpoints/Site";
import { safeApi } from "@/utils/safeApi";

import Footer from "@/components/Footer";

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
