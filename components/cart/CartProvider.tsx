"use client";

import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { getProductById } from "@/data/products";
import type { CartLine } from "@/types/cart";
import type { Product } from "@/types/product";

const STORAGE_KEY = "trevizo-cart";

export type CartItem = CartLine & { product: Product };

export type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (productId: string, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
};

export const CartContext = createContext<CartContextValue | null>(null);

function readStoredLines(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.flatMap((line) => {
      if (!line || typeof line !== "object") return [];
      const productId = "productId" in line ? line.productId : undefined;
      const quantity = "quantity" in line ? line.quantity : undefined;
      if (typeof productId !== "string" || typeof quantity !== "number" || quantity <= 0) {
        return [];
      }
      if (!getProductById(productId)) return [];
      return [{ productId, quantity: Math.floor(quantity) }];
    });
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLines(readStoredLines());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const addItem = useCallback((productId: string, quantity = 1) => {
    if (!getProductById(productId) || quantity <= 0) return;
    setLines((current) => {
      const existing = current.find((line) => line.productId === productId);
      if (!existing) return [...current, { productId, quantity }];
      return current.map((line) =>
        line.productId === productId
          ? { ...line, quantity: line.quantity + quantity }
          : line,
      );
    });
    setIsOpen(true);
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    setLines((current) => {
      if (quantity <= 0) return current.filter((line) => line.productId !== productId);
      return current.map((line) =>
        line.productId === productId ? { ...line, quantity } : line,
      );
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setLines((current) => current.filter((line) => line.productId !== productId));
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const items = lines.flatMap((line) => {
      const product = getProductById(line.productId);
      return product ? [{ ...line, product }] : [];
    });
    const count = items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );

    return {
      items,
      count,
      subtotal,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      addItem,
      setQuantity,
      removeItem,
    };
  }, [addItem, isOpen, lines, removeItem, setQuantity]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
