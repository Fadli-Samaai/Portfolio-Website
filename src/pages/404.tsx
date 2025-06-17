import { CodeLanguageBackground } from "../components/CodeLanguageBackground";
import { Navbar } from "../components/Navbar";
import { NotFoundComponent } from "../components/404Component";


export const NotFound = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Background Effect */}
            <CodeLanguageBackground />

            {/* Navbar */}
            <Navbar/>

            {/* Main Content */}
            <main>
            <NotFoundComponent/>
            </main>
        </div>
    );
};
