import { CodeLanguageBackground } from "../components/CodeLanguageBackground";
import { Navbar } from "../components/Navbar"; 
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Theme toggle */}
            {/* <ThemeToggle /> */}

            {/* Background Effect */}
            <CodeLanguageBackground />

            {/* Navbar */}
            <Navbar/>

            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillSection />
                <ProjectSection />
                <ContactSection />
            </main>

            {/* Footer */}
        </div>
    );
};