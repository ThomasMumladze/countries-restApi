import "./style.scss";
import { useEffect, useRef, useState } from "react";

import * as Icon from "react-bootstrap-icons";

import Ui from "..";

interface Props {
    isDarkMode: boolean;
    searchRegion: string;
    setSearchRegion: React.Dispatch<React.SetStateAction<string>>;
}

export const Filter = (props: Props) => {
    const { isDarkMode, searchRegion, setSearchRegion } = props;

    const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const [bgColor, setBgColor] = useState<string>("");
    let listedItemBackground = "";

    const handleMouseOver = () => {
        if (isDarkMode) {
            setBgColor("#2e3840");
        } else {
            setBgColor("#e3e5e9");
        }
    };

    const handleMouseOut = () => {
        setBgColor("");
    };

    const handleMenuOpen = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSetRegionSearch = (e: any, regionName: string) => {
        setSearchRegion(e.target.textContent);

        if (e.target.textContent === regionName) {
            listedItemBackground =
                isDarkMode && searchRegion === regionName
                    ? "#1c2730"
                    : searchRegion === "asia"
                    ? "#e3e5e9"
                    : "inherit";
        }

        listedItemBackground = "#000";
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("click", handleClickOutside);

        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className="filter" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div
                className="container"
                style={{
                    border: isDarkMode
                        ? "solid 1px rgba(250, 250, 250, 0.5)"
                        : "solid 1px rgba(47, 71, 117, 0.5)",
                    color: isDarkMode ? "#fff" : "#000",
                    backgroundColor: bgColor,
                }}
                onClick={handleMenuOpen}
            >
                <Icon.FilterLeft />
                <p>
                    filter by <span>: </span>
                </p>
                <Icon.CaretDown style={{ transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)" }} />
            </div>
            {isMenuOpen ? (
                <div
                    className="filter-dropDawn"
                    ref={menuRef}
                    style={{
                        backgroundColor: isDarkMode ? "#2b3743" : "#FFF",
                        border: isDarkMode
                            ? "solid 1px rgba(250, 250, 250, 0.5)"
                            : "solid 1px rgba(47, 71, 117, 0.5)",
                    }}
                >
                    <ul style={{ color: isDarkMode ? "#FFF" : "#000" }}>
                        <li
                            onClick={(e) => handleSetRegionSearch(e, "africa")}
                            style={{
                                backgroundColor: listedItemBackground,
                            }}
                        >
                            africa
                        </li>
                        <li
                            onClick={(e) => handleSetRegionSearch(e, "america")}
                            style={{
                                backgroundColor: listedItemBackground,
                            }}
                        >
                            america
                        </li>
                        <li
                            onClick={(e) => handleSetRegionSearch(e, "asia")}
                            style={{
                                backgroundColor: listedItemBackground,
                            }}
                        >
                            asia
                        </li>
                        <li
                            onClick={(e) => handleSetRegionSearch(e, "europe")}
                            style={{
                                backgroundColor: listedItemBackground,
                            }}
                        >
                            europe
                        </li>
                        <li
                            onClick={(e) => handleSetRegionSearch(e, "oceania")}
                            style={{
                                backgroundColor: listedItemBackground,
                            }}
                        >
                            oceania
                        </li>
                    </ul>
                </div>
            ) : null}
        </div>
    );
};
