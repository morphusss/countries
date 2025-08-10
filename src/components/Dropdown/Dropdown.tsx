import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import openDropdown from "@svg/black/down.svg";
import openDropdown_white from "@svg/white/down.svg";
import closeDropdown from "@svg/black/up.svg";
import closeDropdown_white from "@svg/white/up.svg";
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

  const dropdownRef = useRef<null | HTMLElement>(null);

  function renderImageComponent() {
    if (isDropdownFilterOpened) {
      return <img src={closeDropdown} />;
    } else {
      return <img src={openDropdown} />;
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
          onClick={() => {
            setIsDropdownFilterOpened((prev) => !prev);
          }}
        >
          <span>
            {selectedFilter ? selectedFilter.label : "Filter by Region"}
          </span>
          <img src={isDropdownFilterOpened ? closeDropdown: openDropdown} className={styles.buttonImg} />
        </button>

        <section
          className={ `${styles.options} ${isDropdownFilterOpened ? `${styles.optionVisible}` : " "}`
          }
        >
          {dropdownOptions.map((option, idx) => (
            <button
              className={styles.optionTitleButton}
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
