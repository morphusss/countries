import { switchToBlackTheme, switchToWhiteTheme } from "../themeSwitcher"
import moonLogo from "../../assets/moon.svg"
import sunLogo from "../../assets/sun.svg"
import "./header.css"

export function Header() {

    return (
        <>
        <section className="header">
            <section className="header-left-wrapper">
                <h2 className="title-name">Where in the world?</h2>
            </section>
            <section className="header-right-wrapper">
                <button className="switch-theme dark-switch" onClick={ () => {switchToBlackTheme}}> 
                    <section className="button-wrapper">
                    <img src={moonLogo} />
                    <section>Dark Mode</section>
                    </section>
                </button>
                <button className="switch-theme light-switch" onClick={ () => {switchToWhiteTheme}}> 
                    <section className="button-wrapper">
                    <img src={sunLogo} />
                    <section>Light Mode</section>
                    </section>
                </button>
            </section>
        </section>
        </>
    )
}

