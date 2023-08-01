import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Image from "next/image";
import style from "../styles/carrito.module.css";

export default function Carrito({
  carrito,
  actualizarCantidad,
  eliminarProducto,
}) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (total, item) => total + item.cantidad * item.precio,
      0
    );
    setTotal(calculoTotal);
  }, [carrito]);

  return (
    <Layout title="Store">
      <main className="contenedor">
        <h1 className="heading">Store</h1>

        <div className={style.contenido}>
          <div className={style.carrito}>
            <h2>Artículo</h2>
            {carrito.length === 0
              ? "No hay artículos"
              : carrito.map((item) => (
                  <div key={carrito.id} className={style.producto}>
                    <div>
                      <Image
                        width={250}
                        height={480}
                        src={item.imagen}
                        alt={item.nombre}
                      />
                    </div>
                    <div>
                      <p className={style.nombre}>{item.nombre}</p>
                      <div className={style.cantidad}>
                        <p>Cantidad:</p>
                        <select
                          className={style.select}
                          onChange={(e) =>
                            actualizarCantidad({
                              id: item.id,
                              cantidad: e.target.value,
                            })
                          }
                          value={item.cantidad}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <p className={style.precio}>
                        $<span>{item.precio}</span>
                      </p>
                      <p className={style.subtotal}>
                        Subtotal: $<span>{item.cantidad * item.precio}</span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className={style.eliminar}
                      onClick={() => eliminarProducto(item.id)}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>

          <aside className={style.resumen}>
            <h3>Resumen</h3>
            <p>Total a pagar:${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
