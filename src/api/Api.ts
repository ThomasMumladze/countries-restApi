import axios from "axios";

const instance = axios.create({ method: "GET", baseURL: "https://restcountries.com/v3.1" });

const getAllCountries = () => {
    return instance.get("/all");
};

const getCountryByName = (countryName: string) => {
    return instance.get(`name/${countryName}`);
};
export default { getAllCountries, getCountryByName };
