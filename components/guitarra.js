import Image from "next/image";
import Link from "next/link";
import styles from "../styles/guitarras.module.css";
export default function Guitarra({ guitarra }) {
  const { nombre, descripcion, precio, imagen, url } = guitarra;
  return (
    <div className={styles.guitarra}>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={300}
        height={600}
        alt={`Imagen Guitarra ${nombre}`}
      />
      <div className={styles.contenido}>
        <div>{nombre}</div>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>$ {precio}</p>

        <Link className={styles.enlace} href={`/guitarras/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
}
