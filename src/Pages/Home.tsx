import "./style.scss";

import { Header } from "../layouts/Header";

import { Components } from "../components";

interface Props {
    isDarkMode: boolean;
    handleDarkMode: () => void;
}

export const Home = (props: Props) => {
    const { isDarkMode, handleDarkMode } = props;

    return (
        <div className="home-page">
            <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />

            <div className="countries-search ">
                <Components.Search isDarkMode={isDarkMode} />
                <div className="countries-filter">
                    <Components.Filter isDarkMode={isDarkMode} />
                </div>
            </div>
        </div>
    );
};
