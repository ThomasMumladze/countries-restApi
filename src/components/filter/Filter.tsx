import { useState } from "react";
import "./style.scss";

import * as Icon from "react-bootstrap-icons";

interface Props {
    isDarkMode: boolean;
    searchRegion: string;
    setSearchRegion: React.Dispatch<React.SetStateAction<string>>;
}

export const Filter = (props: Props) => {
    const { isDarkMode, searchRegion, setSearchRegion } = props;

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

    return (
        <div className="filter" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div
                className="container"
                style={{
                    border: isDarkMode ? "solid 1px rgba(250, 250, 250, 0.5)" : "solid 1px rgba(47, 71, 117, 0.5)",
                    color: isDarkMode ? "#fff" : "#000",
                    backgroundColor: bgColor,
                }}
            >
                <Icon.FilterLeft />
                <p>
                    filter by <span>: </span>
                </p>
                <Icon.CaretDown />
            </div>
        </div>
    );
};
