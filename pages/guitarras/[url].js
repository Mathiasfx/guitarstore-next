import Image from "next/image";
import styles from "../../styles/guitarras.module.css";
import Layout from "../../components/layout";
export default function Producto(data) {
  console.log("dentro dell componente", data);
  const { nombre, descripcion, imagen, precio } = data.attributes;

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

  const { data } = await respuesta.json();

  return {
    props: data[0],
  };
}
