import categoriaService from "@/services/categoriaService";
import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function ShopLayout() {
  const { data, isLoading } = useQuery({
    queryKey: ["categorias"],
    queryFn: () => categoriaService.getAll(),
  });

  if (isLoading) return "Cargando...";

  if (data) {
    return (
      <>
        <Header categorias={data} />
        <div className="sm:px-10">
          <Outlet />
        </div>
        <Footer />
      </>
    );
  }
}
