import { Link } from "react-router";
import FailedFace from "@svg/black/failed.svg";
import FailedFace_white from "@svg/white/failed_white.svg";
import styles from "./FailedPageLoad.module.css";

export function FailedPageLoad() {
  const isDark = JSON.parse(localStorage.getItem("countryIsDark") || "false");

  return (
    <>
      <section className={styles.root}>
        <section className={styles.upperWrapper}>
          <img src={isDark ? FailedFace_white : FailedFace} alt="" />
        </section>
        <Link to={"/"}>
          <section className={styles.lowerWrapper}>
            Something went wrong! Press on the text to get back to home page
          </section>
        </Link>
      </section>
    </>
  );
}
