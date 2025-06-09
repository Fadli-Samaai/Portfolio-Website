import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return (
        <section 
            id="Home" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <div className="seperate-background">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            <span className="opacity-0 animate-fade-in"> Hello, I'm</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-4" > 
                                {" "}
                                Fadli
                            </span>
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3"> 
                                {" "}    
                                Samaai
                            </span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4 text-hard-background">
                            I’m a full-stack software engineer with hands-on experience across QA, DevOps, Data, and Software Development, giving me a holistic understanding of business-critical systems.
                            I specialize in front-end development with React, API integrations, and building robust deployment pipelines, with a passion for innovation and solving complex problems. 
                            I thrive on continuous learning and collaboration, always driving impact and success in the projects I take on.
                        </p>
                    </div>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#Projects" className="main-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>
            <div 
                className="absolute max-sm:hidden bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce"
            >
                <a href="#About">
                    <span>Scroll</span>
                    <ArrowDown className="h-7.5 w-7.5 text-primary pl-2.5" />
                </a>
            </div>
        </section>
    );
};