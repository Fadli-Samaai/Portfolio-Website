import { Frown } from "lucide-react";

export const NotFoundComponent = () => {
    return (
        <section className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl text-center">
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-primary/10">
                        <Frown className="h-16 w-16 text-primary" />
                    </div>
                </div>
                <div className="seperate-background">
                    <h1 className="text-6xl md:text-8xl font-bold mb-4">
                        404
                        <span className="text-primary"> Not Found</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                        Oops! The page you're looking for doesn't exist.
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        It seems you've taken a wrong turn. The page you requested could not be found. Let's get you back on track.
                    </p>
                    <a href="/#Home" className="main-button inline-block">
                        Go Back Home
                    </a>
                </div>
            </div>
        </section>
    );
};