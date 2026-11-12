"use client";

import { useContext } from "react";
import { CartContext } from "@/components/cart/CartProvider";

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) {
    throw new Error("useCart deve ser usado dentro de CartProvider.");
  }
  return cart;
}
