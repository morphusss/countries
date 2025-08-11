import { Header } from "@components/Header";
import { CountryPageComponent } from "@components/CountryPageComponent";
import { themeStatusStoreSelector } from "@src/store/themeStatusStore/themeStatusStore.selector";
import { useSelector } from "react-redux";
import styles from "@src/styles/pages.module.css";

export function Country() {
  const isDarkSelector = useSelector(themeStatusStoreSelector);
  
  function returnCorrectTheme() {
    const isDarkTheme = JSON.parse(localStorage.getItem("countryIsDark")!);
    if(isDarkTheme) return "true";
    else if(!isDarkTheme) return "false";
    else if(isDarkSelector) return `${isDarkSelector}`;
  }

  return (
    <>
      <section
        className={styles.root}
        data-theme={returnCorrectTheme()}
      >
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
