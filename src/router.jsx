import { BrowserRouter, Routes, Route } from "react-router-dom";

// SHOP
import ShopLayout from "@/layouts/shop/ShopLayout";

import HomeView from "@/views/shop/home/HomeView";
import CategoriaView from "@/views/shop/categoria/CategoriaView";
import ProductoView from "@/views/shop/producto/ProductoView";
import CartView from "@/views/shop/cart/CartView";
import CheckoutAdressView from "@/views/shop/checkout/address/CheckoutAdressView";
import CheckoutView from "@/views/shop/checkout/CheckoutView";
import OrderView from "@/views/shop/orders/order/OrderView";
import OrdersView from "@/views/shop/orders/OrdersView";
import EmptyView from "@/views/shop/empty/EmptyView";
import ProfileView from "@/views/shop/profile/ProfileView";

// AUTH
import AuthLayout from "@/layouts/auth/AuthLayout";

import LoginView from "@/views/auth/login/LoginView";
import NewAccountView from "@/views/auth/new-account/NewAccountView";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ShopLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/categoria/:categoriaId" element={<CategoriaView />} />
          <Route path="/producto/:productoId" element={<ProductoView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout/address" element={<CheckoutAdressView />} />
          <Route path="/checkout" element={<CheckoutView />} />
          <Route path="/order/:ordenId" element={<OrderView />} />
          <Route path="/orders" element={<OrdersView />} />
          <Route path="/empty" element={<EmptyView />} />
          <Route path="/profile" element={<ProfileView />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/new-account" element={<NewAccountView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
