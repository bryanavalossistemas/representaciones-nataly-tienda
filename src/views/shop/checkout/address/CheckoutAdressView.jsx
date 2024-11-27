import Title from "@/components/Title";
import AddressForm from "./components/AddressForm";
import distritoService from "@/services/distritoService";
import { useQuery } from "@tanstack/react-query";
import direccionService from "@/services/direccionService";
import useSession from "@/hooks/useSession";

export default function CheckoutAdressView() {
  const usuario = useSession();

  if (!usuario) {
    return <h3 className="text-5xl">500 - No hay sesión de usuario</h3>;
  }

  const { data: distritos, isLoading } = useQuery({
    queryKey: ["distritos"],
    queryFn: distritoService.getAllPublic,
  });

  const { data: direccion } = useQuery({
    queryKey: ["direccion"],
    queryFn: direccionService.getDireccion,
  });

  if (isLoading) return "cargando ...";

  if (
    distritos &&
    usuario &&
    (direccion || direccion === null)
  ) {
    return (
      <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">
        <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
          <Title title="Dirección" subtitle="Dirección de entrega" />

          <AddressForm
            distritos={distritos}
            direccion={direccion ?? undefined}
          />
        </div>
      </div>
    );
  }
}
