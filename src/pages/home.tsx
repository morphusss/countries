import { Header } from "@components/Header";
import { HomePageComponent } from "@components/HomePageComponent";
import styles from "@src/styles/pages.module.css";

export function Home() {
  return (
    <>
      <section className={styles.root}>
        <section className={styles.upperWrapper}>
          <Header />
        </section>
        <section className={styles.lowerWrapper}>
          <HomePageComponent />
        </section>
      </section>
    </>
  );
}
