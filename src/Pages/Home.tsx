import "./style.scss";

import * as Icon from "react-bootstrap-icons";
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
    const [countryCode, setCountryCode] = useState<string>("");
    const [searchCountry, setSearchCountry] = useState<string>("");
    const [searchRegion, setSearchRegion] = useState<string>("");
    const [error, setError] = useState<boolean | null>(null);

    const fetchCountries = (apiCall: Promise<any>) => {
        apiCall
            .then((response) => {
                setAllCountries(response.data);
                setError(null);
            })
            .catch((error) => {
                if (error.response && error.response.status === 404) {
                    setAllCountries([]);
                    setError(true);
                } else {
                    console.error("An error occurred:", error);
                    setError(true);
                }
            });
    };

    const viewCountryCode = (cca2: string) => {
        setCountryCode(cca2);
    };

    const returnToCountries = () => {
        setCountryCode("");
    };

    useEffect(() => {
        let apiCall: any;

        if (searchCountry) {
            apiCall = Api.getCountryByName(searchCountry);
        } else if (searchRegion) {
            apiCall = Api.getCountryByRegion(searchRegion);
        } else if (countryCode) {
            apiCall = Api.getCountryByCca2code(countryCode);
        } else {
            apiCall = Api.getAllCountries();
        }

        fetchCountries(apiCall);

        const handleKeyDown = (e: any) => {
            if (e.key === "Escape") {
                setSearchCountry("");
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [searchCountry, searchRegion, countryCode]);

    return (
        <div className="home-page">
            <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 52px" }}>
                {allCountries && allCountries?.length > 1 ? (
                    <div className="countries-search ">
                        <Components.Search
                            error={error}
                            value={searchCountry}
                            onChange={setSearchCountry}
                            isDarkMode={isDarkMode}
                        />
                        <div className="countries-filter">
                            <Components.Filter isDarkMode={isDarkMode} setSearchRegion={setSearchRegion} />
                        </div>
                    </div>
                ) : (
                    <div className="returnBtn">
                        <Ui.Button
                            onClick={returnToCountries}
                            style={{ color: isDarkMode ? "rgb(250, 250, 250)" : "rgb(47, 71, 117)" }}
                        >
                            <Icon.ArrowLeftShort /> back to countries
                        </Ui.Button>
                    </div>
                )}

                <div className="allCountries">
                    <Components.CountryCard
                        allCountries={allCountries}
                        error={error}
                        isDarkMode={isDarkMode}
                        viewCountryCode={viewCountryCode}
                    />
                </div>
            </div>
        </div>
    );
};
