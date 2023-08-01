import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/guitarras.module.css";
import Layout from "../../components/layout";

export default function Producto({ guitarras, agregarCarrito }) {
  const [cantidad, setCantidad] = useState(0);
  const { nombre, descripcion, imagen, precio } = guitarras[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(guitarras);

    if (cantidad < 1) {
      alert("Debe seleccionar una cantidad");
      return;
    }
    //construir objeto con guitarra seleccionada
    const guitarraSeleccionada = {
      id: guitarras[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };
    // pasando informacion al context
    agregarCarrito(guitarraSeleccionada);
  };

  return (
    <Layout title={`Guitarra ${nombre}`}>
      <div className={styles.guitarra}>
        <Image
          src={imagen.data.attributes.url}
          width={300}
          height={600}
          alt={`Imagen Guitarra ${nombre}`}
        />
        <div className={styles.contenido}>
          <div>{nombre}</div>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>$ {precio}</p>
          <form className={styles.formulario}>
            <label htmlFor="cantidad">Cantidad:</label>
            <select
              onChange={(e) => {
                setCantidad(+e.target.value);
              }}
              id="cantidad"
            >
              <option value="0">--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar" onClick={handleSubmit} />
          </form>
        </div>
      </div>
    </Layout>
  );
}

//** Static usar las dos */
// export async function getStaticPaths() {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
//   const { data } = await respuesta.json();
//   const paths = data.map((guitarra) => ({
//     params: {
//       url: guitarra.attributes.url,
//     },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }
// export async function getStaticProps({ params: { url } }) {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
//   );
//   const { data: guitarra } = await respuesta.json();

//   return {
//     props: guitarra,
//   };
// }

//** Server side uno solo */
export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  );

  const { data: guitarras } = await respuesta.json();

  return {
    props: { guitarras },
  };
}
