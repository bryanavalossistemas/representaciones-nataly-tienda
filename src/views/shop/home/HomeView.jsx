import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/Title";
import productoService from "@/services/productoService";
import { useQuery } from "@tanstack/react-query";

export default function HomeView() {
  const { data: productos, isLoading } = useQuery({
    queryKey: ["productos"],
    queryFn: productoService.getAllPublic,
  });

  if (isLoading) return "cargando ...";

  if (productos) {
    return (
      <>
        <Title title="Tienda" subtitle="Todos los productos" />
        <ProductGrid productos={productos} />
      </>
    );
  }
}
