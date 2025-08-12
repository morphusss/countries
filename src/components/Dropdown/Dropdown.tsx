import { themeStatusStoreSelector } from "@src/store/themeStatusStore/themeStatusStore.selector";
import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { useSelector } from "react-redux";
import openDropdown from "@svg/black/down.svg";
import openDropdown_white from "@svg/white/down_white.svg";
import closeDropdown from "@svg/black/up.svg";
import closeDropdown_white from "@svg/white/up_white.svg";
import styles from "./Dropdown.module.css";

type Props = {
  selectedFilter: {
    label: string;
    value: string;
  } | null;
  setSelectedFilter: Dispatch<
    SetStateAction<{
      label: string;
      value: string;
    } | null>
  >;
};

const dropdownOptions = [
  {
    label: "Africa",
    value: "africa",
  },
  {
    label: "Americas",
    value: "americas",
  },
  {
    label: "Asia",
    value: "asia",
  },
  {
    label: "Europe",
    value: "europe",
  },
  {
    label: "Oceania",
    value: "oceania",
  },
];

export function Dropdown(props: Props) {
  const { selectedFilter, setSelectedFilter } = props;
  const [isDropdownFilterOpened, setIsDropdownFilterOpened] = useState(false);
  const isDarkTheme: boolean = JSON.parse(
    localStorage.getItem("countryIsDark")!
  );
  const isDarkSelector = useSelector(themeStatusStoreSelector);
  
  function returnCorrectTheme() {
    const isDarkTheme = JSON.parse(localStorage.getItem("countryIsDark")!);
    if(isDarkTheme) return "true";
    else if(!isDarkTheme) return "false";
    else if(isDarkSelector) return `${isDarkSelector}`;
  }

  const dropdownRef = useRef<null | HTMLElement>(null);

  function checkIfDropdownOpened() {
    if (isDropdownFilterOpened) {
      return isDarkTheme ? closeDropdown_white : closeDropdown;
    } else {
      return isDarkTheme ? openDropdown_white : openDropdown;
    }
  }

  useEffect(() => {
    function handler(e: any) {
      if (dropdownRef.current) {
        if (!dropdownRef.current.contains(e.target)) {
          setIsDropdownFilterOpened(false);
        }
      }
    }

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  return (
    <>
      <section className={styles.root} ref={dropdownRef}>
        <button
          className={styles.filterButton}
          data-theme={returnCorrectTheme()}
          onClick={() => {
            setIsDropdownFilterOpened((prev) => !prev);
          }}
        >
          <span>
            {selectedFilter ? selectedFilter.label : "Filter by Region"}
          </span>
          <img src={checkIfDropdownOpened()} className={styles.buttonImg} />
        </button>

        <section
          className={`${styles.options} ${
            isDropdownFilterOpened ? `${styles.optionVisible}` : " "
          }`}
          data-theme={returnCorrectTheme()}
          >
          {dropdownOptions.map((option, idx) => (
            <button
              className={styles.optionTitleButton}
              data-theme={returnCorrectTheme()}
              onClick={() => {
                setSelectedFilter(option);
                setIsDropdownFilterOpened(false);
              }}
              key={idx}
            >
              {option.label}
            </button>
          ))}
        </section>
      </section>
    </>
  );
}
