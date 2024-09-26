import "./App.css";
import { useEffect } from "react";

import { Home } from "./Pages/Home";

import useDarkMode from "./hooks/useDarkMode";

function App() {
    const { isDarkMode, handleDarkMode } = useDarkMode();

    useEffect(() => {
        if (isDarkMode) {
            document.body.style.backgroundColor = "#1c2730";
        } else {
            document.body.style.backgroundColor = "#ffffff";
        }
    }, [isDarkMode]);

    return (
        <>
            <Home isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
        </>
    );
}

export default App;
