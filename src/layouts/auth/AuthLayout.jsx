import { Outlet } from "react-router-dom";

export default function ShopLayout() {
  return (
    <main className="flex justify-center">
      <div className="w-full sm:w-[350px] px-10">
        <Outlet />
      </div>
    </main>
  );
}
