import type { CurrentCountry } from "@src/types/country.types";
import { Link } from "react-router-dom";
import styles from "./IndividualCountryCard.module.css";

type Props = {
  data: CurrentCountry;
};

export function returnCorrectPopulationValue(originalValue: string) {
  let reversedValue: string = "";
  let correctValue: string = "";
  for(let i = originalValue.length - 1, count = 0 ; i >= 0 ; i--, count++) {
    if(count > 0 && count % 3 == 0){
      reversedValue += ","
    }
    reversedValue += originalValue[i]
  }

  for(let i = reversedValue.length - 1; i >= 0; i--){
    correctValue += reversedValue[i];
  }

  return correctValue;
}


export function IndividualCountryCard({ data }: Props) {
  const primaryInfoTable = [
    {
      title: "Population",
      dataForTitle: returnCorrectPopulationValue(String(data.population)),
    },
    {
      title: "Region",
      dataForTitle: data.region,
    },
    {
      title: "Capital",
      dataForTitle: data.capital,
    },
  ];


  return (
    <>
      <li className={styles.root} key={data.name}>
        <Link to={`/${data.name}`} style={{ textDecoration: 'none', color: "#242424" }}>
          <section className={styles.upperWrapper}>
            <img
              src={data.flag}
              alt="country flag"
              className={styles.countryFlagImg}
            />
          </section>
          <section className={styles.lowerWrapper}>
            <h3 className={styles.countryTitle}>{data.name}</h3>
            <ul className={styles.countryInfoTable}>
              {primaryInfoTable.map((item) => (
                <li className={styles.countryInfoWrapper}>
                  <span className={styles.countryInfoTitle}>{item.title}: </span>
                  {item.dataForTitle ? item.dataForTitle : "None"}
                </li>
              ))}
            </ul>
          </section>
        </Link>
      </li>
    </>
  );
}
