import QuantitySelector from "@/components/QuantitySelector";
import useCartStore from "@/stores/cart/cartStore";
import { useState } from "react";

export default function AddToCart({ producto }) {
  const addProductToCart = useCartStore((state) => state.addProductTocart);

  const [cantidad, setCantidad] = useState(1);

  const addToCart = () => {
    addProductToCart({ ...producto, cantidad });
    setCantidad(1);
  };

  return (
    <>
      <h3 className="font-bold text-sm mb-2">Cantidad</h3>
      {/* Selector de Cantidad */}
      <QuantitySelector cantidad={cantidad} setCantidad={setCantidad} />

      {/* Button */}
      <button onClick={addToCart} className="btn-primary my-5 w-full sm:w-auto">
        Agregar al carrito
      </button>
    </>
  );
}
