import axios from "axios";

const instance = axios.create({ method: "GET", baseURL: "https://restcountries.com/v3.1" });

const getAllCountries = () => {
    return instance.get("/all");
};

const getCountryByName = (countryName: string) => {
    if (typeof countryName != "string") return null;
    return instance.get(`name/${countryName}`);
};

const getCountryByRegion = (countryRegion: string) => {
    if (typeof countryRegion != "string") return null;
    return instance.get(`/region/${countryRegion}`);
};

const getCountryByCca2code = (cca2: string) => {
    return instance.get(`/alpha/${cca2}`);
};

export default { getAllCountries, getCountryByName, getCountryByRegion, getCountryByCca2code };
