import "./style.scss";
import { useEffect, useRef, useState } from "react";

import * as Icon from "react-bootstrap-icons";

import FilterDropDawn from "./FilterDropDawn";

interface Props {
    isDarkMode: boolean;
    setSearchRegion: React.Dispatch<React.SetStateAction<string>>;
}

export const Filter = (props: Props) => {
    const { isDarkMode, setSearchRegion } = props;

    const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const [bgColor, setBgColor] = useState<string>("");

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
                    border: isDarkMode ? "solid 1px rgba(250, 250, 250, 0.5)" : "solid 1px rgba(47, 71, 117, 0.5)",
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
                <FilterDropDawn isDarkMode={isDarkMode} menuRef={menuRef} setSearchRegion={setSearchRegion} />
            ) : null}
        </div>
    );
};
