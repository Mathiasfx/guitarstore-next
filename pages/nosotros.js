import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css";
export default function Nosotros() {
  return (
    <Layout title="Nosotros" description="Sobre nosotros y nuestra historia">
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
            alt="imagen sobre nosotros"
          />
          <div>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólo sobrevivió 500 años, sino
              que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original. Fue
              popularizado en los 60s con la creación de las hojas , las cuales
              contenian pasajes de Lorem Ipsum, y más recientemente con software
              de autoedición, como por ejemplo Aldus PageMaker, el cual incluye
              versiones de Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólo sobrevivió 500 años, sino
              que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original. Fue
              popularizado en los 60s con la creación de las hojas Letrase, las
              cuales contenian pasajes de Lorem Ipsum, y más recientemente con
              software de autoedición, como por ejemplo Aldus PageMaker, el cual
              incluye versiones de Lorem Ipsum.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
