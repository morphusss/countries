import FailedFace from "@svg/black/failed.svg"
import FailedFace_white from "@svg/white/failed_white.svg"
import styles from "./EmptyArrayHandler.module.css";

export function EmptyArrayHandler() {
    const isDark = JSON.parse(localStorage.getItem("countryIsDark") || "false");

  return (
    <>
      <section className={styles.root}>
        <section className={styles.upperWrapper}>
            <img src={isDark ? FailedFace_white: FailedFace} alt="" />
        </section>
        <section className={styles.lowerWrapper}>
            Oops... 0 guesses. Try another country!
        </section>
      </section>
    </>
  );
}
