export { default as GetCatalogProducts } from "./Get/GetCatalogProducts";
export type {
  TGetCatalogProductsRequest,
  TGetCatalogProductsResponse,
} from "./Get/GetCatalogProducts.type";
export { default as GetCatalogProduct } from "./{slug}/Get/GetCatalogProduct";
export type {
  TGetCatalogProductRequest,
  TGetCatalogProductResponse,
} from "./{slug}/Get/GetCatalogProduct.type";
