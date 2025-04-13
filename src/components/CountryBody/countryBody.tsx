import { selectedCountry } from "../../components/MainBody/body";
import { Link } from "react-router-dom";
import data from "../../json/data.json";
import { useState } from "react";
import "./countryBody.css"
import backArrow from "../../assets/back-arrow.svg"

export function Body () {
    
    const [filteredCountries, setFilteredCountries] = useState(data);

    const loader = () =>{
        const filteredCountry = data.filter((item) => item.name.toLowerCase().includes(selectedCountry.toLowerCase()));

        setFilteredCountries(filteredCountry);
    }
    
    loader
    

    return(
        <>
        <section className="country">
        <section className="upper-container">
                <section className="back-button-wrapper">
                    <Link to="/">
                    <button className="back-button">
                    <img src={backArrow} className="back-arrow"/>
                    Back
                    </button>
                    </Link>
                </section>
            </section>
            {filteredCountries.map( (data) => data.name === selectedCountry ? (
                <section className="lower-container">
                    <section className="left-container">
                        <section className="country-flag-wrapper">
                            <img src={data.flag} alt="country flag" className="country-big-flag"/>
                        </section>
                    </section>
                    <section className="right-container">
                        <section className="country-title-wrapper">
                            <h2>{data.name}</h2>
                        </section>
                        <section className="country-info-wrapper">
                            <section className="country-info-left">
                                <ul className="info-table">
                                    <li>
                                        <span className="country-paragraph">
                                            Native name: {" "}
                                        </span>
                                        {data.nativeName}
                                    </li>
                                    <li>
                                        <span className="country-paragraph">
                                            Population: {" "}
                                        </span>
                                        {data.population}
                                    </li>
                                    <li>
                                        <span className="country-paragraph">
                                            Region: {" "}
                                        </span>
                                        {data.region}
                                    </li>
                                    <li>
                                        <span className="country-paragraph">
                                            Sub region: {" "}
                                        </span>
                                        {data.subregion}
                                    </li>
                                    <li>
                                        <span className="country-paragraph">
                                            Capital: {" "}
                                        </span>
                                        {data.capital}
                                    </li>
                                </ul>
                            </section>
                            <section className="country-info-right">
                            <span className="country-paragraph">
                                Top Level Domain: {" "}
                            </span>
                            {data.topLevelDomain}
                            </section>
                        </section>
                        <section className="country-borders-wrapper">
                            <span className="country-paragraph">Border Countries</span>
                            <button className="border-button"></button>
                            <button className="border-button"></button>
                            <button className="border-button"></button>
                        </section>
                    </section>
                </section>
            ): null)}
        </section>  
        </>
    )
}