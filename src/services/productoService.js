import api from "@/libs/axios";

class ProductoService {
  async create({ payload }) {
    const { data } = await api.post("/productos/public", payload);

    return data;
  }

  async getAll() {
    const { data: respuesta } = await api.get("/productos");

    return respuesta.data;
  }

  async getAllPublic() {
    const { data: respuesta } = await api.get("/productos/public");

    return respuesta.data;
  }

  async getById({ id }) {
    const { data: respuesta } = await api.get(`/productos/${id}`);

    return respuesta.data;
  }

  async getByIdPublic({ id }) {
    const { data: respuesta } = await api.get(`/productos/${id}/public`);

    return respuesta.data;
  }

  async update({ id, payload }) {
    const { data } = await api.put(`/productos/${id}`, payload);

    return data;
  }

  async delete({ id }) {
    const { data } = await api.delete(`/productos/${id}`);

    return data;
  }
}

export default new ProductoService();
