import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import searchLogo from "@svg/black/search.svg";
import searchLogo_white from "@svg/white/search_white.svg";
import styles from "./SearchComponent.module.css";
import { themeStatusStoreSelector } from "@src/store/themeStatusStore/themeStatusStore.selector";
import { useSelector } from "react-redux";

type Props = {
  searchCountry: string;
  setSearchCountry: Dispatch<SetStateAction<string>>;
};

export function Search(props: Props) {
  const isDarkTheme = JSON.parse(localStorage.getItem("countryIsDark")!);
  const isDarkSelector = useSelector(themeStatusStoreSelector);
  
  function returnCorrectTheme() {
    const isDarkTheme = JSON.parse(localStorage.getItem("countryIsDark")!);
    if(isDarkTheme) return "true";
    else if(!isDarkTheme) return "false";
    else if(isDarkSelector) return `${isDarkSelector}`;
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    props.setSearchCountry(searchTerm);
  };

  return (
    <>
      <section className={styles.root} >
        <input
          type="text"
          id="countrySearchField"
          className={styles.searchInputField}
          data-theme={returnCorrectTheme()}
          value={props.searchCountry}
          onChange={handleInputChange}
          placeholder="Search for a country..."
        />
        <img
          src={isDarkTheme ? searchLogo_white : searchLogo}
          className={styles.searchLogo}
        />
      </section>
    </>
  );
}
