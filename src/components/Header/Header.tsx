import { ThemeSwitcher } from "@components/ThemeSwitcher"
import styles from "./Header.module.css"

export function Header() {

    return (
        <>
        <section className={styles.root}>
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

