import Image from "next/image";
import Link from "next/link";
export default function Guitarra({ guitarra }) {
  const { nombre, descripcion, precio, imagen, url } = guitarra;
  return (
    <div>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={300}
        height={600}
        alt={`Imagen Guitarra ${nombre}`}
      />
      <div>{nombre}</div>
      <p>{descripcion}</p>
      <p>$ {precio}</p>
      <Link href={`/guitarras/${url}`}>Ver Producto</Link>
    </div>
  );
}
