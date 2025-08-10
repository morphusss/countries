import { Link, Navigate, useParams } from "react-router-dom";
import data from "@src/json/data.json";
import backArrow from "@svg/black/backArrow.svg";
import backArrow_white from "@svg/white/backArrow.svg";
import type { CurrentCountry } from "@src/types/country.types";
import styles from "./CountryPageComponent.module.css";

//handler for population ("12333" => 12,333)
//handler for currencies (name)
//handler for languages (list of langs)
//handler for border countries ("UKR" => "Ukraine")

export function CountryPageComponent() {
  const params = useParams<{ country: string }>();
  let currentCountry: CurrentCountry = data.find(
    (country) => country.name === params.country
  ) as CurrentCountry;

  if (!currentCountry) {
    return <Navigate to={"/"} />;
  }

  const leftInformationTable = [
    {
      title: "Native Name",
      dataForTitle: currentCountry.nativeName,
    },
    {
      title: "Population",
      dataForTitle: currentCountry.population,
    },
    {
      title: "Region",
      dataForTitle: currentCountry.region,
    },
    {
      title: "Sub Region",
      dataForTitle: currentCountry.subregion,
    },
    {
      title: "Capital",
      dataForTitle: currentCountry.capital,
    },
  ];

  const rightInformationTable = [
    {
      title: "Top Level Domain",
      dataForTitle: currentCountry.topLevelDomain,
    },
    {
      title: "Currencies",
      dataForTitle: currentCountry.currencies,
    },
    {
      title: "Languages",
      dataForTitle: currentCountry.languages,
    },
  ];

  return (
    <>
      <section className={styles.root}>
        <section className={styles.upperWrapper}>
          <section className={styles.backToHomeButtonWrapper}>
            <Link to="/">
              <section className={styles.backToHomeButton}>
                <img src={backArrow} className={styles.backImg} />
                Back
              </section>
            </Link>
          </section>
        </section>
        <section className={styles.lowerWrapper}>
          <section className={styles.leftWrapper}>
            <section className={styles.countryFlagWrapper}>
              <img
                src={currentCountry.flag}
                alt="Country Flag"
                className={styles.countryFlag}
              />
            </section>
          </section>
          <section className={styles.rightWrapper}>
            <section className={styles.titleWrapper}>
              <h2>{currentCountry.name}</h2>
            </section>
            <section className={styles.infoWrapper}>
              <section className={styles.infoLeftWrapper}>
                <ul className={styles.infoTable}>
                  {leftInformationTable.map((item) => (
                    <li className={styles.dedicatedInfoWrapper}>
                      <span className={styles.infoTitle}>{item.title}: </span>
                      {item.dataForTitle}
                    </li>
                  ))}
                </ul>
              </section>
              <section className={styles.infoRightWrapper}>
                <ul className={styles.infoTable}>
                  {rightInformationTable.map((item) => (
                    <li className={styles.dedicatedInfoWrapper}>
                      <span className={styles.infoTitle}>{item.title}: </span>
                      {/* {item.dataForTitle} */} none
                    </li>
                  ))}
                </ul>
              </section>
            </section>
            <section className={styles.borderListWrapper}>
              <span className={styles.borderListTitle}>Border Countries: </span>
              <ul className={styles.borderList}>
                {/* Here must be an border function that must be mapped */}
              </ul>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
