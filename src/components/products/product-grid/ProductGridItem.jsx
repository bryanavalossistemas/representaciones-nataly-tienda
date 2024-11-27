import formatCurrency from "@/utils/formatCurrency";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductGridItem({ producto }) {
  const [displayImage, setDisplayImage] = useState(
    producto.imagenesProducto[0].url
  );

  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link to={`/producto/${producto.id}`}>
        <img
          src={displayImage}
          alt={producto.nombre}
          className="w-full object-cover rounded"
          width={500}
          height={500}
          onMouseEnter={() => setDisplayImage(producto.imagenesProducto[1].url)}
          onMouseLeave={() => setDisplayImage(producto.imagenesProducto[0].url)}
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link className="hover:text-blue-600" to={`/producto/${producto.id}`}>
          {producto.nombre}
        </Link>
        <span className="font-bold">
          {formatCurrency(producto.precioVenta)}
        </span>
      </div>
    </div>
  );
}
