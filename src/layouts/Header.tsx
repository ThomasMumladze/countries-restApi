import "./style.scss";

import * as Icon from "react-bootstrap-icons";

import Ui from "../components";

interface Props {
    isDarkMode: boolean;
    handleDarkMode: () => void;
}

export const Header = (props: Props) => {
    const { isDarkMode, handleDarkMode } = props;

    return (
        <header
            style={{
                backgroundColor: isDarkMode ? "#2b3743" : "#FFF",
                boxShadow: isDarkMode ? "0 0 18px 0 #222" : "0 0 18px 0 #ccc",
            }}
        >
            <div>
                <Ui.H1 style={{ color: isDarkMode ? "#fff" : "#222" }} onClick={() => window.location.reload()}>
                    Where in the world?
                </Ui.H1>
                <Ui.Button
                    onClick={handleDarkMode}
                    style={{ color: isDarkMode ? "rgb(250, 250, 250)" : "rgb(47, 71, 117)" }}
                >
                    {!isDarkMode ? (
                        <>
                            <Icon.Moon /> dark mode
                        </>
                    ) : (
                        <>
                            <Icon.Sun /> light mode
                        </>
                    )}
                </Ui.Button>
            </div>
        </header>
    );
};
