import "./style.scss";

import * as Icon from "react-bootstrap-icons";

import Ui from "..";

interface Props {
    onChange: (e: any) => any;
    value: string;
    isDarkMode: boolean;
    error: boolean | null;
}

export const Search = (props: Props) => {
    const { isDarkMode, onChange, value, error } = props;

    return (
        <div
            className="search"
            style={{
                backgroundColor: isDarkMode ? "#2b3743" : "#FFF",
                border: error
                    ? "#d22 solid 1px"
                    : isDarkMode
                    ? "solid 1px rgba(250, 250, 250, 0.5)"
                    : "solid 1px rgba(182, 182, 182, 0.5)",
            }}
        >
            <Icon.Search fill={isDarkMode ? "#fff" : "#000"} />
            <Ui.Input
                value={value}
                onChange={(e: any) => onChange(e.target.value)}
                type="text"
                placeholder="Search for countries"
                style={{ color: isDarkMode ? "#fff" : "#000" }}
            />
        </div>
    );
};
