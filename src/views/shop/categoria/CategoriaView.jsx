import Title from "@/components/Title";
import ProductGrid from "@/components/products/product-grid/ProductGrid";
import categoriaService from "@/services/categoriaService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function CategoriaView() {
  const params = useParams();
  const categoriaId = params.categoriaId;
  const { data: categoria, isLoading, isError } = useQuery({
    queryKey: ["categoria", categoriaId],
    queryFn: () => categoriaService.getByIdPublic({ id: categoriaId }),
    retry: false,
  });

  if (isLoading) return "Cargando...";

  if (categoria) {
    return (
      <>
        <Title
          title={`${categoria.nombre}`}
          subtitle={`Productos de ${categoria.nombre}`}
        />
        <ProductGrid productos={categoria.productos} />
      </>
    );
  }
}
