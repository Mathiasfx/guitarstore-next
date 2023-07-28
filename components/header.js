import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra} `}>
        <Image src="/img/logo.svg" alt="Logo" width={300} height={40} />

        <nav className={styles.navegacion}>
          <Link
            className={router.pathname === "/" ? styles.active : ""}
            href="/"
          >
            Inicio
          </Link>
          <Link
            className={router.pathname === "/nosotros" ? styles.active : ""}
            href="/nosotros"
          >
            Nosotros
          </Link>
          <Link
            className={router.pathname === "/tienda" ? styles.active : ""}
            href="/tienda"
          >
            Tienda
          </Link>
          <Link
            className={router.pathname === "/blog" ? styles.active : ""}
            href="/blog"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
