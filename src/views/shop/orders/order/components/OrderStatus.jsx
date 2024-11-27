import { IoCardOutline } from "react-icons/io5";
import clsx from "clsx";

export default function OrderStatus({ estaPagado }) {
  return (
    <div
      className={clsx(
        "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
        {
          "bg-red-500": !estaPagado,
          "bg-green-700": estaPagado,
        }
      )}
    >
      <IoCardOutline size={30} />
      {/* <span className="mx-2">Pendiente de pago</span> */}
      <span className="mx-2">{estaPagado ? "Pagada" : "No pagada"}</span>
    </div>
  );
}
