import Layout from "../components/layout";
import Guitarra from "../components/guitarra";

export default function Tienda({ guitarras }) {
  return (
    <Layout title="Tienda" description="Tienda virtual de ventas">
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>
        {guitarras?.map((guitarra) => (
          <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
        ))}
      </main>
    </Layout>
  );
}

/**Consulta a una API usando getStaticProps : son mas para datos estaticos, si se cambia en la api hay que hacer un build nuevo  */
// export async function getStaticProps() {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/guitarras?populate=imagen`
//   );
//   const { data: guitarras } = await respuesta.json();

//   console.log(guitarras);
//   return {
//     props: { guitarras },
//   };
// }

/** con getServerSideProps obtenemos la informacion mas nueva posible si actualizamos la api se actualiza la info*/
export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );
  const { data: guitarras } = await respuesta.json();

  return {
    props: { guitarras },
  };
}
