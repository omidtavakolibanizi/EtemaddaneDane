import type { TCategory } from "../../Catalog.type";

/* -------------------------------------------------------------------------- */
/*                                   Request                                  */
/* -------------------------------------------------------------------------- */

export type TGetCatalogCategoriesRequest = {
  request?: Record<string, never>;
};

/* -------------------------------------------------------------------------- */
/*                                  Response                                  */
/* -------------------------------------------------------------------------- */

export type TGetCatalogCategoriesResponse = TCategory[];
