import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("Theme", "Light")
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark")
            localStorage.setItem("Theme", "dark")
            setIsDarkMode(true);
        }
    };

    useEffect(() => {
        const storeTheme = localStorage.getItem("Theme")
        if(storeTheme === "dark"){
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        }else {
            localStorage.setItem("Theme", "light")
            setIsDarkMode(false)
        }
    },[])

    return (
        <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 p-2 rounded-full transition-color duration-300 z-50",
            "focus:outline-hidden"
        )}>
            {" "}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300"/>
            ) : (
                <Moon className="h-6 w-6 text-blue-900"/>
            )}
        </button>
    );
};