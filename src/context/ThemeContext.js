import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext("dark");

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "dark");

    console.log(JSON.parse(localStorage.getItem("theme")));

    function handleToggleTheme() {
        setTheme(prevState => prevState === "dark" ? "light" : "dark");
    }

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, onToggleTheme: handleToggleTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}