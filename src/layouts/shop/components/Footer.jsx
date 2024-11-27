import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
      <Link to="/">
        <span className={`font-title antialiased font-bold `}>Tienda </span>
        <span>| C&L </span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link to="/" className="mx-3">
        Privacidad & Legal
      </Link>

      <Link to="/" className="mx-3">
        Ubicaciones
      </Link>
    </div>
  );
}
