import "./style.scss";
import { useEffect, useState } from "react";

import { Header } from "../layouts/Header";

import Ui, { Components } from "../components";

import Api from "../api/Api";

interface Props {
    isDarkMode: boolean;
    handleDarkMode: () => void;
}

export const Home = (props: Props) => {
    const { isDarkMode, handleDarkMode } = props;

    const [allCountries, setAllCountries] = useState<null | []>(null);

    useEffect(() => {
        Api.getAllCountries().then((countries) => setAllCountries(countries.data));
    }, []);

    return (
        <div className="home-page">
            <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 52px" }}>
                <div className="countries-search ">
                    <Components.Search isDarkMode={isDarkMode} />
                    <div className="countries-filter">
                        <Components.Filter isDarkMode={isDarkMode} />
                    </div>
                </div>

                <div className="allCountries">
                    {allCountries &&
                        allCountries.map((item: any, index: number) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: isDarkMode ? "#303a43" : "#f6f6f7",
                                    boxShadow: isDarkMode ? "0 0 12px 0 #000 " : "0 0 12px 0 #bbbbbb",
                                }}
                            >
                                <div className="flat-image">
                                    <img src={item.flags.png} alt="..." />
                                </div>
                                <div className="country-name">
                                    <Ui.P>{item.name.common}</Ui.P>
                                    <Ui.P>
                                        <span>capital</span>: {item.capital}
                                    </Ui.P>
                                    <Ui.P>
                                        <span>region</span>: {item.region}
                                    </Ui.P>
                                    <Ui.P>
                                        <span>population</span>: {item.population}
                                    </Ui.P>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};
