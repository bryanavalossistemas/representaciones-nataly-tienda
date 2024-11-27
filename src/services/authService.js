import api from "@/libs/axios";
import { jwtDecode } from "jwt-decode";

class UsuarioService {
  async getUsuario({ payload }) {
    const { data: respuesta } = await api.get("/auth/usuario", payload);

    return respuesta.data;
  }

  async login({ data }) {
    const { data: respuesta } = await api.post("/auth/login", data);
    const token = respuesta.token;
    const decodedToken = jwtDecode(token);
    const nombre = decodedToken.nombre;

    return { token, nombre };
  }

  async google({ googleToken }) {
    const { data: respuesta } = await api.post("/auth/google", { googleToken });
    const token = respuesta.token;
    const decodedToken = jwtDecode(token);
    const nombre = decodedToken.nombre;

    return { token, nombre };
  }
}

export default new UsuarioService();
