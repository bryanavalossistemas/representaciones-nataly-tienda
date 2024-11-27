import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create()(
  persist(
    (set, get) => ({
      token: null,

      setToken: ({ token }) => {
        set(() => ({
          token: token,
        }));
      },
    }),
    { name: "rn-shop-auth-store" }
  )
);

export default useAuthStore;
