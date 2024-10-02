import "./style.scss";

import Ui from "..";

interface Props {
    error: boolean | null;
    isDarkMode: boolean;
    allCountries: [] | null;
}
const CountryCard = (props: Props) => {
    const { error, allCountries, isDarkMode } = props;

    return (
        <>
            {error ? (
                <Ui.P style={{ color: isDarkMode ? "#d22" : "#000" }} className="errorMessage">
                    country not found
                </Ui.P>
            ) : (
                <>
                    {allCountries &&
                        allCountries.map((item: any, index: number) => (
                            <div
                                className="countryCard"
                                key={index}
                                style={{
                                    backgroundColor: isDarkMode ? "#303a43" : "#f6f6f7",
                                    boxShadow: isDarkMode ? "0 0 12px 0 #000 " : "0 0 12px 0 #bbbbbb",
                                    maxWidth: allCountries.length <= 1 ? "335px" : "100%",
                                }}
                            >
                                <div className="flat-image" style={{ userSelect: "none" }}>
                                    <img src={item.flags.png} alt="..." />
                                </div>
                                <div className="country-name">
                                    <Ui.P style={{ color: isDarkMode ? "#ccc" : "#000" }}>
                                        {item.name.common}
                                    </Ui.P>
                                    <Ui.P style={{ color: isDarkMode ? "#ccc" : "#000" }}>
                                        <span>capital</span>: {item.capital}
                                    </Ui.P>
                                    <Ui.P style={{ color: isDarkMode ? "#ccc" : "#000" }}>
                                        <span>region</span>: {item.region}
                                    </Ui.P>
                                    <Ui.P style={{ color: isDarkMode ? "#ccc" : "#000" }}>
                                        <span>population</span>: {item.population}
                                    </Ui.P>
                                </div>
                            </div>
                        ))}
                </>
            )}
        </>
    );
};

export default CountryCard;
