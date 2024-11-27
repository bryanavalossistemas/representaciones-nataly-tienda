import api from "@/libs/axios";

class DistritoService {
  async getAllPublic() {
    const { data: respuesta } = await api.get("/distritos/public");

    return respuesta.data;
  }
}

export default new DistritoService();
