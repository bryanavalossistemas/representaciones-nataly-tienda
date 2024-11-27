import api from "@/libs/axios";

class OrdenService {
  async create({ data }) {
    const { data: respuesta } = await api.post("/ordenes", data);

    return { orden: respuesta.data };
  }

  async getAllByUsuarioId() {
    const { data: respuesta } = await api.get("/ordenes");

    return respuesta.data;
  }

  async getById({ id }) {
    const { data: respuesta } = await api.get(`/ordenes/${id}`);

    return respuesta.data;
  }
}

export default new OrdenService();
