import type { TSiteContent } from "../Site.type";

/* -------------------------------------------------------------------------- */
/*                                   Request                                  */
/* -------------------------------------------------------------------------- */

export type TGetSiteContentRequest = {
  request?: Record<string, never>;
};

/* -------------------------------------------------------------------------- */
/*                                  Response                                  */
/* -------------------------------------------------------------------------- */

export type TGetSiteContentResponse = TSiteContent;
