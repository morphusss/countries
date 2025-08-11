import { ThemeSwitcher } from "@components/ThemeSwitcher"
import styles from "./Header.module.css"
import { themeStatusStoreSelector } from "@src/store/themeStatusStore/themeStatusStore.selector";
import { useSelector } from "react-redux";

export function Header() {
    const isDarkSelector = useSelector(themeStatusStoreSelector);
  
    function returnCorrectTheme() {
      const isDarkTheme = JSON.parse(localStorage.getItem("countryIsDark")!);
      if(isDarkTheme) return "true";
      else if(!isDarkTheme) return "false";
      else if(isDarkSelector) return `${isDarkSelector}`;
    }

    return (
        <>
        <section className={styles.root} data-theme={returnCorrectTheme()}>
            <section className={styles.leftWrapper}>
                <h2 className={styles.title}>Where in the world?</h2>
            </section>
            <section className={styles.rightWrapper}>
                <section className={styles.themeSwitcher}> 
                    <ThemeSwitcher/>
                </section>
            </section>
        </section>
        </>
    )
}

