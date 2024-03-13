import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Licenced Plate Detection System, Landing Page
      </h1>
      <p className={styles.contentDescription}>Continuo to login</p>
      <Link href="/login">
        <span className={styles.link}> Login</span>
      </Link>
    </div>
  );
}
