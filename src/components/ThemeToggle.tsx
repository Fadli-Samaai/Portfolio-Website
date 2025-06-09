import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

interface ThemeToggleProps {
    inMobileMenu?: boolean;
}

export const ThemeToggle = ({ inMobileMenu = false }: ThemeToggleProps) => {
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
        <button 
            onClick={toggleTheme} 
            className={cn(
                "p-2 rounded-full transition-colors duration-300 focus:outline-none",
                inMobileMenu 
                    ? "relative"
                    : "fixed top-5 right-5 z-50"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300"/>
            ) : (
                <Moon className="h-6 w-6 text-blue-900"/>
            )}
        </button>
    );
};