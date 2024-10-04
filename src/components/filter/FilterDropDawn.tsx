import "./style.scss";

import * as Icon from "react-bootstrap-icons";

import { useEffect, useState } from "react";

interface Props {
    isDarkMode: boolean | null;
    menuRef: HTMLDivElement | any;
    setSearchRegion: React.Dispatch<React.SetStateAction<string>>;
}

const FilterDropDawn = (props: Props) => {
    const { isDarkMode, menuRef, setSearchRegion } = props;

    const [activeRegion, setActiveRegion] = useState<string>("");

    useEffect(() => {
        const savedRegion = sessionStorage.getItem("selectedRegion");
        if (savedRegion) {
            setActiveRegion(savedRegion);
            setSearchRegion(savedRegion);
        }
    }, [setSearchRegion]);

    const handleRegionSearch = (regionName: string) => {
        if (regionName === activeRegion) {
            setSearchRegion("");
            setActiveRegion("");
            sessionStorage.removeItem("selectedRegion");
        } else {
            setSearchRegion(regionName);
            setActiveRegion(regionName);
            sessionStorage.setItem("selectedRegion", regionName);
        }
    };

    return (
        <div
            className="filter-dropDawn"
            ref={menuRef}
            style={{
                backgroundColor: isDarkMode ? "#2b3743" : "#FFF",
                border: isDarkMode ? "solid 1px rgba(250, 250, 250, 0.5)" : "solid 1px rgba(47, 71, 117, 0.5)",
            }}
        >
            <ul>
                {["africa", "america", "asia", "europe", "oceania"].map((region) => (
                    <li
                        key={region}
                        onClick={() => handleRegionSearch(region)}
                        style={{
                            backgroundColor:
                                activeRegion === region ? (isDarkMode ? "#1c2730" : "#e2e2e2") : "transparent",
                            color: isDarkMode ? "#FFF" : "#000",
                            opacity: activeRegion === region ? "1" : "",
                            paddingLeft: activeRegion === region ? "10px" : "5px",
                            fontSize: activeRegion === region ? "1.1rem " : "",
                        }}
                    >
                        {activeRegion == region ? <Icon.Check fill={isDarkMode ? "lawngreen" : "#000"} /> : null}
                        {region}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterDropDawn;
