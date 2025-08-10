import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import searchLogo from "@svg/black/search.svg";
import styles from "./SearchComponent.module.css";

type Props = {
  searchCountry: string;
  setSearchCountry: Dispatch<SetStateAction<string>>;
};

export function Search(props: Props) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    props.setSearchCountry(searchTerm);
  };

  return (
    <>
      <section className={styles.root}>
        <input
          type="text"
          id="countrySearchField"
          className={styles.searchInputField}
          value={props.searchCountry}
          onChange={handleInputChange}
          placeholder="Search for a country..."
        />
        <img src={searchLogo} className={styles.searchLogo} />
      </section>
    </>
  );
}
