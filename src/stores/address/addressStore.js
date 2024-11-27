import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAddressStore = create()(
  persist(
    (set, get) => ({
      address: {
        nombre: "",
        apellido: "",
        direccion: "",
        distritoId: "",
        distrito: "",
        celular: "",
        rememberAddress: "",
      },

      setAddress: (address) => {
        set({ address });
      },

      clearAddress: () => {
        set({
          address: {
            nombre: "",
            apellido: "",
            direccion: "",
            distritoId: "",
            distrito: "",
            celular: "",
          },
        });
      },
    }),
    { name: "rn-shop-address-store" }
  )
);

export default useAddressStore;
