import { Link, Navigate, useParams } from "react-router-dom";
import data from "@src/json/data.json";
import BackArrow from "@svg/black/backArrow.svg";
import BackArrow_white from "@svg/white/backArrow_white.svg";
import type { CurrentCountry } from "@src/types/country.types";
import styles from "./CountryPageComponent.module.css";
import { returnCorrectPopulationValue } from "@components/IndividualCountryCard";
import { FailedPageLoad } from "@components/FailedPageLoad";
import { themeStatusStoreSelector } from "@src/store/themeStatusStore/themeStatusStore.selector";
import { useSelector } from "react-redux";

type currenciesType = {
  code: string;
  name: string;
  symbol: string;
};

type languagesType = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

const countryJSONList = data as CurrentCountry[];

export function CountryPageComponent() {
  const params = useParams<{ country: string }>();
  let currentCountry: CurrentCountry = data.find(
    (country) => country.name === params.country
  ) as CurrentCountry;
  const isDarkTheme = JSON.parse(localStorage.getItem("countryIsDark")!);
  const isDarkSelector = useSelector(themeStatusStoreSelector);

  function returnCorrectTheme() {
    if (isDarkTheme) return "true";
    else if (!isDarkTheme) return "false";
    else if (isDarkSelector) return `${isDarkSelector}`;
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

  function showCorrectSimpleInfo(info: {
    title: string;
    dataForTitle: string | number;
  }) {
    if (typeof info.dataForTitle === "number") {
      return returnCorrectPopulationValue(String(info.dataForTitle));
    }

    return info.dataForTitle;
  }

  function showCorrectComplexInfo(info: {
    title: string;
    dataForTitle: string[] | currenciesType[] | languagesType[];
  }) {
    let output: string = "";
    switch (info.title) {
      case rightInformationTable[0].title:
        output = `${(info.dataForTitle as string[]).map((item) => {
          return item;
        })}`;
        return output;
        break;
      case rightInformationTable[1].title:
        output = `${(info.dataForTitle as currenciesType[]).map((item) => {
          return item.code;
        })}`;
        return output;
        break;
      case rightInformationTable[2].title:
        output = `${(info.dataForTitle as languagesType[]).map((language) => {
          return language.name;
        })}`; // What the fuck happens here :/
        return output;
        break;
      default:
        return (output = "Something went wrong... ");
    }
  }

  function showCorrectListOfBorderCountries(countries: string[] | undefined) {
    let countriesList: string[] = [];
    if (!countries) {
      countriesList.push("None");
    } else {
      for (let i = 0; i < countries.length; i++) {
        const countryFullName = countryJSONList.filter(
          (item) => item.alpha3Code === countries[i]
        );
        countriesList.push(countryFullName[0].name);
      }
    }
    if (!countriesList.includes("None")) {
      return (
        <>
          {countriesList.map((country) => (
            <Link to={`/${country}`} data-theme={returnCorrectTheme()}>
              <li
                className={styles.borderCountryWrapper}
                data-theme={returnCorrectTheme()}
              >
                {country}
              </li>
            </Link>
          ))}
        </>
      );
    } else {
      return (
        <>
          {countriesList.map((country) => (
            <Link to={`/`} data-theme={returnCorrectTheme()}>
              <li
                className={styles.borderCountryWrapper}
                data-theme={returnCorrectTheme()}
              >
                {country}
              </li>
            </Link>
          ))}
        </>
      );
    }
  }

  if (!currentCountry) {
    return <Navigate to={"/"} />;
  }

  try {
    return (
      <>
        <section className={styles.root}>
          <section className={styles.upperWrapper}>
            <section className={styles.backToHomeButtonWrapper}>
              <Link to="/" data-theme={returnCorrectTheme()}>
                <section
                  className={styles.backToHomeButton}
                  data-theme={returnCorrectTheme()}
                >
                  <img
                    src={isDarkTheme ? BackArrow_white : BackArrow}
                    className={styles.backImg}
                  />
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
                  data-theme={returnCorrectTheme()}
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
                        {showCorrectSimpleInfo(item)}
                      </li>
                    ))}
                  </ul>
                </section>
                <section className={styles.infoRightWrapper}>
                  <ul className={styles.infoTable}>
                    {rightInformationTable.map((item) => (
                      <li className={styles.dedicatedInfoWrapper}>
                        <span className={styles.infoTitle}>{item.title}: </span>
                        {showCorrectComplexInfo(item)}
                      </li>
                    ))}
                  </ul>
                </section>
              </section>
              <section className={styles.borderListWrapper}>
                <span className={styles.borderListTitle}>
                  Border Countries:{" "}
                </span>
                <ul className={styles.borderList}>
                  {showCorrectListOfBorderCountries(currentCountry.borders)}
                </ul>
              </section>
            </section>
          </section>
        </section>
      </>
    );
  } catch (error) {
    return (
      <>
        <section className={styles.root}>
          <FailedPageLoad />
        </section>
      </>
    );
  }
}
