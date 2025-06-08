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
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, []) 

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsMobileMenuOpen(false)
        }
        
        if (isMobileMenuOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    return (
        <>
            <nav className={cn(
                "fixed w-full z-40 transition-all duration-300",
                "h-16 md:h-20",
                isScrolled 
                    ? "bg-background/80 backdrop-blur-md shadow-lg border-b border-border/20" 
                    : "bg-transparent"
            )}>
                <div className="container h-full flex items-center justify-between px-4">
                    <a 
                        className="text-xl font-bold text-primary flex items-center"
                        href="#Home"
                    >
                        <span className="relative z-10">
                            <span className="text-glow text-foreground">Fadli Samaai</span>{" "}
                            <span className="text-primary">Portfolio</span>
                        </span>
                    </a>

                    {/* Desktop nav */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a 
                                key={item.name} 
                                href={item.href} 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Nav Button */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-foreground z-50 relative"
                        aria-label="Toggle menu"
                    > 
                        {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div 
                className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-30",
                    "flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMobileMenuOpen 
                        ? "opacity-100 pointer-events-auto" 
                        : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
            >
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item) => (
                        <a 
                            key={item.name}
                            href={item.href} 
                            className="text-foreground/80 hover:text-primary transition-colors duration-300 text-center"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Spacer div to push content below navbar */}
            <div className="h-16 md:h-20" />
        </>
    )
}