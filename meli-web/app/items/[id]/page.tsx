import ProductDetail from "@/features/ProductDetail/ProductDetail";
import { Suspense } from "react";

export default function PageProductDetail() {
  return (
    <Suspense fallback={<></>}>
      <ProductDetail />
    </Suspense>
  );
}
