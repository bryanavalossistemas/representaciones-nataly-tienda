import ordenService from "@/services/ordenService";
import useCartStore from "@/stores/cart/cartStore";
import useAddressStore from "@/stores/address/addressStore";
import formatCurrency from "@/utils/formatCurrency";
import { useMutation } from "@tanstack/react-query";
// import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export default function PlaceOrder() {
  const address = useAddressStore((state) => state.address);
  const { itemsInCart, subtotal, igv, total } = useCartStore((state) =>
    state.getSummaryInformation()
  );
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const clearAddress = useAddressStore((state) => state.clearAddress);

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: ordenService.create,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: ({ orden }) => {
      clearCart();
      clearAddress();
      navigate(`/order/${orden.id}`);
    },
  });

  const onPlaceOrder = async () => {
    const detallesOrden = cart.map((item) => {
      return { productoId: item.id, cantidad: item.cantidad };
    });
    const direccionOrden = {
      nombre: address.nombre,
      apellido: address.apellido,
      direccion: address.direccion,
      celular: address.celular,
      distritoId: address.distritoId,
    };

    mutate({ data: { detallesOrden, ...direccionOrden } });
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-7">
      <h2 className="text-2xl mb-2">Dirección de entrega</h2>
      <div className="mb-10">
        <p className="text-xl">
          {address.nombre} {address.apellido}
        </p>
        <p>{address.direccion}</p>
        <p>{address.distrito}</p>
        <p>{address.celular}</p>
      </div>

      {/* Divider */}
      <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

      <h2 className="text-2xl mb-2">Resumen de orden</h2>

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
        <span className="mt-5 text-2xl text-right">
          {formatCurrency(total)}
        </span>
      </div>

      <div className="mt-5 mb-2">
        <p className="mb-5">
          {/* Disclaimer */}
          <span className="text-xs">
            Al hacer clic en &quot;Colocar orden&quot;, aceptas nuestros{" "}
            <a href="#" className="underline">
              términos y condiciones
            </a>{" "}
            y{" "}
            <a href="#" className="underline">
              política de privacidad
            </a>
          </span>
        </p>

        {/* <p className="text-red-500">{errorMessage}</p> */}

        <button
          disabled={isPending}
          onClick={onPlaceOrder}
          // className={clsx({
          //   "btn-primary": !isPlacingOrder,
          //   "btn-disabled": isPlacingOrder,
          // })}
          className="btn-primary w-full"
        >
          Colocar orden
        </button>
      </div>
    </div>
  );
}
