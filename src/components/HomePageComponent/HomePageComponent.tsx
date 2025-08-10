import { useState } from "react";
import { Dropdown } from "@components/Dropdown/Dropdown";
import { IndividualCountryCard } from "@components/IndividualCountryCard";
import { Search } from "@components/SearchComponent/SearchComponent";
import { type CurrentCountry } from "@src/types/country.types";
import data from "@src/json/data.json";
import styles from "./HomePageComponent.module.css";
import { EmptyArrayHandler } from "@components/EmptyArrayHandler";

const countries = data as CurrentCountry[];

export function HomePageComponent() {
  const [searchCountry, setSearchCountry] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<{
    label: string;
    value: string;
  } | null>(null);

  let filteredCountries: CurrentCountry[] = [];
  if (selectedFilter && searchCountry) {
    filteredCountries = countries.filter(
      (c) =>
        c.region === selectedFilter.label &&
        c.name.toLocaleLowerCase().startsWith(searchCountry.toLocaleLowerCase())
    );
  } else if (selectedFilter && !searchCountry) {
    filteredCountries = countries.filter(
      (c) => c.region === selectedFilter.label
    );
  } else if (!selectedFilter && searchCountry) {
    filteredCountries = countries.filter((c) =>
      c.name.toLowerCase().startsWith(searchCountry.toLowerCase())
    );
  } else {
    filteredCountries = countries;
  }

  function catchEmptyArray() {
    if (filteredCountries.length === 0) {
      return(
      <>
      <EmptyArrayHandler/>
      </>
      );
    } else {
      return(
      <>
        <section className={styles.countriesListWrapper}>
          <ul className={styles.countriesList}>
            {filteredCountries.map((data) => (
              <IndividualCountryCard data={data} key={data.name} />
            ))}
          </ul>
        </section>
      </>
      );
    }
  }

  return (
    <>
      <section className={styles.root}>
        <section className={styles.upperWrapper}>
          <section className={styles.searchField}>
            <Search
              searchCountry={searchCountry}
              setSearchCountry={setSearchCountry}
            />
          </section>
          <section className={styles.dropdownWrapper}>
            <Dropdown
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
          </section>
        </section>
        <section className={styles.lowerWrapper}>
          {catchEmptyArray()}
        </section>
      </section>
    </>
  );
}
