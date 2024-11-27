import useCartStore from "../stores/cart/cartStore.js";

describe("Cart Store - addProductTocart", () => {
  it("Debe agregar un producto al carrito de compras", () => {
    const { addProductTocart } = useCartStore.getState();
    addProductTocart({
      id: 1,
      nombre: "Producto 1",
      cantidad: 1,
      precioVenta: 100,
    });
    let cart = useCartStore.getState().cart;
    expect(cart).toHaveLength(1);
    expect(cart[0]).toMatchObject({ id: 1, cantidad: 1 });
    cart = useCartStore.getState().cart;
    expect(cart).toHaveLength(1);
  });
});

describe("Cart Store - updateProductQuantity", () => {
  it("Debe actualizar la cantidad de un producto existente en el carrito", () => {
    const { updateProductQuantity } = useCartStore.getState();
    updateProductQuantity({ id: 1 }, 5);
    let cart = useCartStore.getState().cart;
    expect(cart).toHaveLength(1);
    expect(cart[0]).toMatchObject({ id: 1, cantidad: 5 });
  });
});
