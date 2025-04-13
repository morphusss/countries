import "./dropdown.css"
import { useEffect, useRef, useState } from "react"
import openDropdown from "../../assets/dropdown-open.svg"
import closeDropdown from "../../assets/dropdown-close.svg"

export let selectedRegion: string = "";

export function Dropdown() {
    const [dropdownFilter, setDropdownFilter] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handler(e: any ) {
            if(dropdownRef.current){
                if(!dropdownRef.current.contains(e.target)){
                    setDropdownFilter(false)
                }
            }
        }

        document.addEventListener('click', handler)

        return () => {
            document.removeEventListener('click', handler)
        }   
    });

    const dropdownOptions = [
        {
            id: 1,
            label: "Africa",
            value: "africa",
        },
        {
            id: 2,
            label: "America",
            value: "america",
        },
        {
            id: 3,
            label: "Asia",
            value: "asia",
        },
        {
            id: 4,
            label: "Europe",
            value: "europe",
        },
        {
            id: 5,
            label: "Oceania",
            value: "oceania",
        },
    ];

    return(
        <>
        <section className="dropdown" ref={dropdownRef}>
            <button className="filter" onClick={() => {
                setDropdownFilter(!dropdownFilter)
            }}>
                <span>{selectedOption ? selectedOption.label : "Filter by Region"}</span>
                <span>{dropdownFilter ? <img src={closeDropdown}/> : <img src={openDropdown}/>}</span>
            </button>

            <section className={`options ${dropdownFilter ? "visible" : ""}`}>
                {dropdownOptions.map((option) => {
                    return(
                        <button onClick={() => {
                            setSelectedOption(option)
                            selectedRegion = option.value
                            setDropdownFilter(false)
                        }}>{option.label}</button>
                    )
                })}
            </section>
        </section>
        </>
    )
}