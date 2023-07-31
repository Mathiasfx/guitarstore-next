import Layout from "../components/layout";
import Link from "next/link";
export default function Pagina404() {
  return (
    <Layout title="Pagina no encontrada">
      <h1 className="error">404</h1>
      <p className="error">Pagina no encontrada</p>
      <Link className="error-enlace" href="/">
        Volver a Inicio
      </Link>
    </Layout>
  );
}
