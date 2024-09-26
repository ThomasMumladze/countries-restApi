import { useState, useEffect } from "react";

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("darkMode") === "true");

    useEffect(() => {
        localStorage.setItem("darkMode", isDarkMode.toString());
    }, [isDarkMode]);

    const handleDarkMode = () => {
        return setIsDarkMode(!isDarkMode);
    };

    return { isDarkMode, handleDarkMode };
};

export default useDarkMode;
