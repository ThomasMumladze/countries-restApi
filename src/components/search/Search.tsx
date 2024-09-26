import "./style.scss";

import * as Icon from "react-bootstrap-icons";

import Ui from "..";

interface Props {
    isDarkMode: boolean;
}

export const Search = (props: Props) => {
    const { isDarkMode } = props;

    return (
        <div
            className="search"
            style={{
                backgroundColor: isDarkMode ? "#2b3743" : "#FFF",
                border: isDarkMode ? "solid 1px transparent" : "solid 1px #4750585a",
            }}
        >
            <Icon.Search fill={isDarkMode ? "#fff" : "#000"} />
            <Ui.Input
                type="text"
                placeholder="Search for countries"
                style={{ color: isDarkMode ? "#fff" : "#000" }}
            />
        </div>
    );
};
