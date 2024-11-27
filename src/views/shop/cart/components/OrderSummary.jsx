import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCartStore from "@/stores/cart/cartStore";
import formatCurrency from "@/utils/formatCurrency";

export default function OrderSummary() {
  const { itemsInCart, subtotal, igv, total } = useCartStore((state) =>
    state.getSummaryInformation()
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (itemsInCart === 0) {
      navigate("/empty");
    }
  }, [itemsInCart]);

  return (
    <div className="grid grid-cols-2">
      <span>No. Productos</span>
      <span className="text-right">
        {itemsInCart === 1 ? "1 artículo" : `${itemsInCart} artículos`}
      </span>

      <span>Subtotal</span>
      <span className="text-right">{formatCurrency(subtotal)}</span>

      <span>Impuestos (18%)</span>
      <span className="text-right">{formatCurrency(igv)}</span>

      <span className="mt-5 text-2xl">Total:</span>
      <span className="mt-5 text-2xl text-right">{formatCurrency(total)}</span>
    </div>
  );
}
