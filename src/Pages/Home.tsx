import "./style.scss";
import { useEffect, useState } from "react";

import { Header } from "../layouts/Header";

import { Components } from "../components";

import Api from "../api/Api";

interface Props {
    isDarkMode: boolean;
    handleDarkMode: () => void;
}

export const Home = (props: Props) => {
    const { isDarkMode, handleDarkMode } = props;
    const [searchCountry, setSearchCountry] = useState<string>("");
    const [allCountries, setAllCountries] = useState<null | []>(null);
    const [error, setError] = useState<boolean | null>(null);

    const fetchCountries = (apiCall: any) => {
        apiCall
            .then((response: any) => {
                setAllCountries(response.data);
                setError(null);
            })
            .catch((error: any) => {
                if (error.response && error.response.status === 404) {
                    setAllCountries([]);
                }
                console.error("An error occurred:", error);
                setError(true);
            });
    };

    useEffect(() => {
        if (searchCountry) {
            fetchCountries(Api.getCountryByName(searchCountry));
        } else {
            fetchCountries(Api.getAllCountries());
        }

        document.addEventListener("keydown", (e) => {
            if (e.key == "Escape") {
                setSearchCountry("");
            }
        });
    }, [searchCountry]);

    return (
        <div className="home-page">
            <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 52px" }}>
                <div className="countries-search ">
                    <Components.Search value={searchCountry} onChange={setSearchCountry} isDarkMode={isDarkMode} />
                    <div className="countries-filter">
                        <Components.Filter isDarkMode={isDarkMode} />
                    </div>
                </div>

                <div className="allCountries">
                    <Components.CountryCard allCountries={allCountries} error={error} isDarkMode={isDarkMode} />
                </div>
            </div>
        </div>
    );
};
