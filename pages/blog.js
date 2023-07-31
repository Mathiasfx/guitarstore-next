import Layout from "../components/layout";
import Post from "../components/post";
import styles from "../styles/grid.module.css";

export default function Blog({ data }) {
  return (
    <Layout
      title="Blog"
      description="Blog de Musica venta de guitarras acordes y consejos"
    >
      <main className="contenedor">
        <h1 className="heading">Blog</h1>
        <div className={styles.grid}>
          {data.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

/**Consulta a una API usando getStaticProps : son mas para datos estaticos, si se cambia en la api hay que hacer un build nuevo  */
export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  const { data } = await respuesta.json();

  return {
    props: { data },
  };
}
