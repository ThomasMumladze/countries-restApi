import "./style.scss";

import * as Icon from "react-bootstrap-icons";

interface Props {
    isDarkMode: boolean;
}

export const Filter = (props: Props) => {
    const { isDarkMode } = props;

    return (
        <div className="filter">
            <div
                className="container"
                style={{
                    border: isDarkMode
                        ? "solid 1px rgba(250, 250, 250, 0.5)"
                        : "solid 1px rgba(47, 71, 117, 0.5)",
                    color: isDarkMode ? "#fff" : "#000",
                }}
            >
                <Icon.Funnel />
                <p>
                    sort by <span>: </span>
                </p>
                <Icon.CaretDown />
            </div>

            <div
                className="container"
                style={{
                    border: isDarkMode
                        ? "solid 1px rgba(250, 250, 250, 0.5)"
                        : "solid 1px rgba(47, 71, 117, 0.5)",
                    color: isDarkMode ? "#fff" : "#000",
                }}
            >
                <Icon.FilterLeft />
                <p>
                    fiilter by <span>: </span>
                </p>
                <Icon.CaretDown />
            </div>
        </div>
    );
};
