"use client";

import { useState } from "react";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { QuantityStepper } from "@/components/ui/QuantityStepper";

export function ProductPurchase({ productId, name }: { productId: string; name: string }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
      <QuantityStepper value={quantity} onChange={setQuantity} label={name} />
      <AddToCartButton productId={productId} quantity={quantity} className="sm:w-auto sm:px-8" />
    </div>
  );
}
