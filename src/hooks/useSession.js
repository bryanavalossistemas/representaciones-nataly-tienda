import useAuthStore from "@/stores/auth/authStore";
import { jwtDecode } from "jwt-decode";

function useSession() {
  const token = useAuthStore((state) => state.token);
  if (!token) {
    return null;
  }
  const decodedToken = jwtDecode(token);
  const id = decodedToken.id;
  const rolId = decodedToken.rolId;
  const nombre = decodedToken.nombre;

  return { id, nombre, rolId };
}

export default useSession;
