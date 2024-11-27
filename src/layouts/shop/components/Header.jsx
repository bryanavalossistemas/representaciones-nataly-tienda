import { useState } from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Sidebar } from "./SideBar";
import useCartStore from "@/stores/cart/cartStore";

export default function Header({ categorias }) {
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [open, setOpen] = useState(false);

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo */}
      <div>
        <Link to="/">
          <span className={`font-title antialiased font-bold`}>Tienda</span>
          <span> | C&L</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        {categorias.map((categoria) => (
          <Link
            key={categoria.id}
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
            to={`/categoria/${categoria.id}`}
          >
            {categoria.nombre}
          </Link>
        ))}
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <Link to="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link to={totalItemsInCart === 0 ? "/empty" : "/cart"} className="mx-2">
          <div className="relative">
            <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
              {totalItemsInCart}
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          onClick={() => setOpen(true)}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Menú
        </button>

        <Sidebar open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
}
