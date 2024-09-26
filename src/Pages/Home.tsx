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

            <div className="countrie-search countrie-filter">
                <Components.Search isDarkMode={isDarkMode} />
            </div>
        </div>
    );
};
