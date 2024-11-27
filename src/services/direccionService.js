import api from "@/libs/axios";

class DireccionService {
  async getDireccion() {
    const { data: respuesta } = await api.get("direcciones/usuario");

    return respuesta.data;
  }

  async createOrUpdateDireccion({ data }) {
    const { data: respuesta } = await api.put(
      "direcciones/usuario/createOrUpdate",
      data
    );

    return respuesta.data;
  }

  async deleteDireccion() {
    const { data: respuesta } = await api.delete("direcciones/usuario/delete");

    return respuesta.data;
  }
}

export default new DireccionService();
