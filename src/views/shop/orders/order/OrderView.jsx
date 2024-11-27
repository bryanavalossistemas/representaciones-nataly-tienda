import Title from "@/components/Title";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ordenService from "@/services/ordenService";
import formatCurrency from "@/utils/formatCurrency";
import OrderStatus from "./components/OrderStatus";

export default function OrderView() {
  const params = useParams();
  const ordenId = params.ordenId;
  const {
    data: orden,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["orden", ordenId],
    queryFn: () => ordenService.getById({ id: ordenId }),
    retry: false,
  });

  if (isLoading) return "cargando ...";

  if (orden) {
    const productosEnOrden = orden.detallesOrden.reduce(
      (total, item) => total + item.cantidad,
      0
    );

    return (
      <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
        <div className="flex flex-col w-[1000px]">
          <Title title={`Orden #${orden.id}`} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Carrito */}
            <div className="flex flex-col mt-5">
              <OrderStatus estaPagado={orden?.estaPagado ?? false} />
              {/* Items */}
              {orden.detallesOrden.map((detalleOrden) => (
                <div key={detalleOrden.nombreProducto} className="flex mb-5">
                  <img
                    src={`${detalleOrden.producto.imagenesProducto[0].url}`}
                    width={100}
                    height={100}
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    alt={detalleOrden.nombreProducto}
                    className="mr-5 rounded"
                  />
                  <div>
                    <p>{detalleOrden.nombreProducto}</p>
                    <p>
                      {formatCurrency(detalleOrden.precioVenta)} x{" "}
                      {detalleOrden.cantidad}
                    </p>
                    <p className="font-bold">
                      Subtotal:{" "}
                      {formatCurrency(
                        detalleOrden.precioVenta * detalleOrden.cantidad
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Checkout - Resumen de orden */}
            <div className="bg-white rounded-xl shadow-xl p-7">
              <h2 className="text-2xl mb-2">Dirección de entrega</h2>
              <div className="mb-10">
                <p className="text-xl">
                  {orden.direccionOrden.nombre} {orden.direccionOrden.apellido}
                </p>
                <p>{orden.direccionOrden.direccion}</p>
                <p>{orden.direccionOrden.distrito.nombre}</p>
                <p>{orden.direccionOrden.celular}</p>
              </div>
              {/* Divider */}
              <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />
              <h2 className="text-2xl mb-2">Resumen de orden</h2>
              <div className="grid grid-cols-2">
                <span>No. Productos</span>
                <span className="text-right">
                  {productosEnOrden === 1
                    ? "1 artículo"
                    : `${productosEnOrden} artículos`}
                </span>
                <span>Subtotal</span>
                <span className="text-right">
                  {formatCurrency(orden.subtotal)}
                </span>
                <span>Impuestos (18%)</span>
                <span className="text-right">{formatCurrency(orden.igv)}</span>
                <span className="mt-5 text-2xl">Total:</span>
                <span className="mt-5 text-2xl text-right">
                  {formatCurrency(orden.total)}
                </span>
              </div>
              <div className="mt-5 mb-2 w-full">
                <OrderStatus estaPagado={orden.estaPagado ?? false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
