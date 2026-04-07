    import { useEffect, useState } from "react";

    export const useTheme = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

        if (savedTheme) {
        setTheme(savedTheme);
        } else {
        // Opcional: detectar preferencia del sistema
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;
        setTheme(prefersDark ? "dark" : "light");
        }
    }, []);

    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
        root.classList.add("dark");
        } else {
        root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return { theme, toggleTheme };
    };
