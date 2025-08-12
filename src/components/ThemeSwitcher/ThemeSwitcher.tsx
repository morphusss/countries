import { setThemeStatus } from "@src/store/themeStatusStore/themeStatusStore.slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import MoonImage from "@svg/black/moon.svg";
import SunImage from "@svg/white/sun_white.svg";
import styles from "./ThemeSwitcher.module.css";

export function ThemeSwitcher() {
  const dispatch = useDispatch();
  const [ , setIsDark] = useState(false);
  const isDarkThemeLocalStored: boolean = JSON.parse(
    localStorage.getItem("countryIsDark")!
  );

  function changeTheme() {
    setIsDark((prev) => {
      localStorage.setItem("countryIsDark", String(!prev));
      dispatch(setThemeStatus(!prev))
      return !prev;
    });
  }

  return (
    <>
      <section className={styles.root}>
        <section className={styles.switcherWrapper} onClick={changeTheme}>
          <img
            src={isDarkThemeLocalStored ? SunImage : MoonImage}
            className={styles.themeImage}
          />
          <span className={styles.themeTitle}>
            {isDarkThemeLocalStored ? "Light Theme" : "Dark theme"}
          </span>
        </section>
      </section>
    </>
  );
}
