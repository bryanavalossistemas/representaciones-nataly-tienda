import ProductImage from "@/components/ProductImage";
import QuantitySelector from "@/components/QuantitySelector";
import useCartStore from "@/stores/cart/cartStore";
import formatCurrency from "@/utils/formatCurrency";
import { Link } from "react-router-dom";

export default function ProductsInCart() {
  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );
  const removeProduct = useCartStore((state) => state.removeProduct);
  const productsInCart = useCartStore((state) => state.cart);

  return (
    <>
      {productsInCart.map((producto) => (
        <div key={producto.id} className="flex mb-5">
          <ProductImage
            src={producto.imagenesProducto[0].url}
            width={100}
            height={100}
            style={{
              width: "100px",
              height: "100px",
            }}
            alt={producto.nombre}
            className="mr-5 rounded"
          />

          <div>
            <Link
              className="hover:underline cursor-pointer"
              to={`/producto/${producto.id} `}
            >
              {producto.nombre}
            </Link>

            <p>{formatCurrency(producto.precioVenta)}</p>
            <QuantitySelector
              cantidad={producto.cantidad}
              setCantidad={(cantidad) =>
                updateProductQuantity(producto, cantidad)
              }
            />

            <button
              onClick={() => removeProduct(producto)}
              className="underline mt-3"
            >
              Remover
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
