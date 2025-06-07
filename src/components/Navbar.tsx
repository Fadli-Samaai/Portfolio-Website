import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
    {name: "Home", href: "#Home"},
    {name: "About", href: "#About"},
    {name: "Skills", href: "#Skills"},
    {name: "Projects", href: "#Projects"},
    {name: "Contact", href: "#Contact"},
] 

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })

    return <nav className={cn("fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5" 
    )}>
        <div className="container flex items-center justify-between">
            <a 
                className="text-xl font-bold text-primary flex items-center"
                href="#hero"
            >
                <span className="relative z-10">
                    <span className="text-glow text-foreground"> Fadli Samaai </span>{" "}
                    Portfolio
                </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item, key) => (
                    <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-color duration-300">
                        {item.name}
                    </a>
                ))}
            </div>


            {/* Mobile Nav */}

            <button 
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="md:hidden p-2 text-foreground z-50"
            > 
                {isMobileMenuOpen ? <X size={24}/>: <Menu size={24}/>}
            </button>

            <div 
                className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duratino-300 md:hidden",
                    isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
            >
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a 
                            key={key} 
                            href={item.href} 
                            className="text-foreground/80 hover:text-primary transition-color duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
            
        </div>
    </nav>
}