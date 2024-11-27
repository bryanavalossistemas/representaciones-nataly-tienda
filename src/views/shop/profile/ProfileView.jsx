import Title from "@/components/Title";
import useSession from "@/hooks/useSession";
import { useNavigate } from "react-router-dom";

export default function ProfileView() {
  const usuario = useSession();

  const navigate = useNavigate();

  if (!usuario) {
    navigate("/");
  }

  return (
    <div>
      <Title title="Perfil" />

      <pre>{JSON.stringify(usuario, null, 2)}</pre>

      <h3 className="text-3xl mb-10">
        {usuario.rolId === 1
          ? "Administrador"
          : usuario.rolId === 2
          ? "Vendedor"
          : "Comprador"}
      </h3>
    </div>
  );
}
