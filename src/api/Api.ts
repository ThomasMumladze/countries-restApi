import axios from "axios";

const instance = axios.create({ method: "GET", baseURL: "https://restcountries.com/v3.1" });

const getAllCountries = () => {
    return instance.get("/all");
};

export default { getAllCountries };
