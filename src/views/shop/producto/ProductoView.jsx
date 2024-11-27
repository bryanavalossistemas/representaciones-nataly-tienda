import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import productoService from "@/services/productoService";
import ProductSlideshow from "./components/ProductSlideshow";
import ProductMobileSlideshow from "./components/ProductMobileSlideshow";
import formatCurrency from "@/utils/formatCurrency";
import AddToCart from "./components/AddToCart";
import StockLabel from "./components/StockLabel";

export default function ProductoView() {
  const params = useParams();
  const productoId = params.productoId;
  const {
    data: producto,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["producto", productoId],
    queryFn: () => productoService.getByIdPublic({ id: productoId }),
    retry: false,
  });

  if (isLoading) return "Cargando...";

  if (producto) {
    return (
      <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Slideshow */}
        <div className="col-span-1 md:col-span-2 ">
          {/* Mobile Slideshow */}
          <ProductMobileSlideshow
            title={producto.nombre}
            images={producto.imagenesProducto}
            className="block md:hidden"
          />

          {/* Desktop Slideshow */}
          <ProductSlideshow
            title={producto.nombre}
            images={producto.imagenesProducto}
            className="hidden md:block"
          />
        </div>

        {/* Detalles */}
        <div className="col-span-1 px-5">
          <StockLabel stock={producto.stock} />

          <h1 className={`font-title antialiased font-bold text-xl`}>
            {producto.nombre}
          </h1>
          <p className="text-lg mb-5">{formatCurrency(producto.precioVenta)}</p>

          <AddToCart producto={producto} />

          {/* Descripción */}
          <h3 className="font-bold text-sm">Descripción</h3>
          <p className="font-light">{producto.descripcion}</p>
        </div>
      </div>
    );
  }
}
