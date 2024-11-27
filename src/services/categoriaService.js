import api from "@/libs/axios";

class ProductoService {
  async create({ payload }) {
    const { data } = await api.post("/categorias", payload);

    return data;
  }

  async getAll() {
    const { data: respuesta } = await api.get("/categorias/public");

    return respuesta.data;
  }

  async getById({ id }) {
    const { data: respuesta } = await api.get(`/categorias/${id}`);

    return respuesta.data;
  }

	async getByIdPublic({ id }) {
    const { data: respuesta } = await api.get(`/categorias/${id}/public`);

    return respuesta.data;
  }

  async update({ id, payload }) {
    const { data } = await api.put(`/categorias/${id}`, payload);

    return data;
  }

  async delete({ id }) {
    const { data } = await api.delete(`/categorias/${id}`);

    return data;
  }
}

export default new ProductoService();
