import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create()(
  persist(
    (set, get) => ({
      cart: [],

      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.cantidad, 0);
      },

      getSummaryInformation: () => {
        const { cart } = get();

        const total = cart.reduce(
          (total, producto) => producto.cantidad * producto.precioVenta + total,
          0
        );
        const subtotal = total / 1.18;
        const igv = subtotal * 0.18;
        const itemsInCart = cart.reduce(
          (total, item) => total + item.cantidad,
          0
        );

        return {
          total,
          igv,
          subtotal,
          itemsInCart,
        };
      },

      addProductTocart: (producto) => {
        const { cart } = get();

        const productInCart = cart.some((item) => item.id === producto.id);

        if (!productInCart) {
          set({ cart: [...cart, producto] });
          return;
        }

        const updatedCartProducts = cart.map((item) => {
          if (item.id === producto.id) {
            return { ...item, cantidad: item.cantidad + producto.cantidad };
          }

          return item;
        });

        set({ cart: updatedCartProducts });
      },

      updateProductQuantity: (producto, cantidad) => {
        const { cart } = get();

        // Si la cantidad es 0, elimina el producto del carrito
        if (cantidad === 0) {
          const updatedCart = cart.filter((item) => item.id !== producto.id);
          set({ cart: updatedCart });
          return;
        }

        // Si la cantidad no es 0, actualiza la cantidad del producto
        const updatedCart = cart.map((item) => {
          if (item.id === producto.id) {
            return { ...item, cantidad: cantidad };
          }
          return item;
        });

        set({ cart: updatedCart });
      },

      removeProduct: (producto) => {
        const { cart } = get();
        const updatedCartProducts = cart.filter(
          (item) => item.id !== producto.id
        );

        set({ cart: updatedCartProducts });
      },

      clearCart: () => {
        set({ cart: [] });
      },
    }),
    { name: "rn-shop-cart-store" }
  )
);

export default useCartStore;
