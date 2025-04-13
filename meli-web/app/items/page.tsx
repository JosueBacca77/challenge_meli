import ProductsSearch from "@/features/ProductsSearch/ProductsSearch";
import { Suspense } from "react";

export default function PageProductsSearch() {
  return (
    <Suspense fallback={<></>}>
      <ProductsSearch />
    </Suspense>
  );
}
