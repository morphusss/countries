import { useState } from "react";
import searchLogo from "../../assets/search.svg"
import data from "../../json/data.json";
import "./body.css";
import { Dropdown, selectedRegion } from "../Dropdown/dropdown";
import { Link } from "react-router-dom";

export let selectedCountry: string;

export function Body() {
  const [searchCountry, setSearchCountry] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(data);
  const [, setRender] = useState<boolean>(false);

  const handleInputChange = (e: any) => {
    const searchTerm = e.target.value;
    setSearchCountry(searchTerm);

    const filteredItems = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) && item.region.toLowerCase().includes(selectedRegion.toLowerCase()),
    );

    setFilteredCountries(filteredItems);
  };

  const manualRender = () => {
    setRender(prev => !prev);
  };

  const handleFilterChange = () => {
    const filteredItems = data.filter((item) => 
      item.region.toLowerCase().includes(selectedRegion.toLowerCase()),
    );

    setFilteredCountries(filteredItems);

    manualRender;
  };

  return (
    <>
      <section className="body">
        <section className="upper-container-body">
          <section className="search-filter-group">
            <input
              type="text"
              id="search-country"
              value={searchCountry}
              onChange={handleInputChange}
              placeholder="Search for a country..."
            />
            <img src={searchLogo} className="search-logo" />
          </section>
          <section className="location-filter-group" onClick={handleFilterChange}>
            <Dropdown/>
          </section>
        </section>
        <section className="lower-container-body">
          <section className="countries-list">
            <ul className="countries-list-table" >
              {filteredCountries.map((data) => (
                <li key={data.name}>
                  <Link to="/country">
                  <button className="country-small-button" onClick={() => selectedCountry = data.name}>
                    <section className="small-button-upper-wrapper">
                      <img
                        src={data.flag}
                        alt="country flag"
                        className="country-small-flag"
                      />
                    </section>
                    <section className="small-button-lower-wrapper">
                      <h3 className="country-small-title">{data.name}</h3>
                      <p className="country-small-info">
                        <span className="country-small-paragraph">
                          Population:{" "}
                        </span>
                        {data.population}
                      </p>
                      <p className="country-small-info">
                        <span className="country-small-paragraph">
                          Region:{" "}
                        </span>
                        {data.region}
                      </p>
                      <p className="country-small-info">
                        <span className="country-small-paragraph">
                          Capital:{" "}
                        </span>
                        {data.capital}
                      </p>
                    </section>
                  </button>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </>
  );
}
