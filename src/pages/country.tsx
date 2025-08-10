import { Header } from "@components/Header";
import { CountryPageComponent } from "@components/CountryPageComponent";
import styles from "@src/styles/pages.module.css";

export function Country() {
  return (
    <>
      <section className={styles.root}>
        <section className={styles.upperWrapper}>
          <Header />
        </section>
        <section className={styles.lowerWrapper}>
          <CountryPageComponent />
        </section>
      </section>
    </>
  );
}
