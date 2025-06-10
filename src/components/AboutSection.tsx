import { Computer, Rocket, User } from "lucide-react";
import { cn } from "../lib/utils";

export const AboutSection = () => {
    return( 
        <section id="About" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl seperate-background">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About
                    <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Software Developer</h3>
                        
                        <p className="text-muted-foreground">
                            I enjoy building things that make life easier, whether it’s improving a user interface,
                            streamlining a deployment process, or helping a team move faster. 
                            Over the last year, I’ve worked across multiple parts of the tech stack, 
                            giving me a strong appreciation for how different pieces of a system fit together.
                        </p>
                        <p className="text-muted-foreground">
                            My background includes time spent in <strong className="text-primary">QA</strong>, <strong className="text-primary">DevOps</strong>, <strong className="text-primary">Data</strong>, and <strong className="text-primary">Software Development</strong>,
                            experiences that have helped me think critically about <strong className="text-primary">quality</strong>, <strong className="text-primary">scalability</strong>, and <strong className="text-primary">performance</strong> from day one of a project.
                            I’m comfortable working with a variety of technologies 
                            from <strong className="text-primary">React</strong> and <strong className="text-primary">C#</strong> to <strong className="text-primary">Docker</strong>, <strong className="text-primary">AWS</strong>, and <strong className="text-primary">Terraform</strong>. I 
                            am always eager to explore new tools and frameworks that can solve real problems. 
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#Contact" className="main-button">
                                {" "}
                                Get In Touch
                            </a>
                            <a 
                                href="/api/download-cv"
                                download="Fadli_Samaai_CV.pdf"
                                className={cn("px-6 py-2 rounded-full border border-primary text-primary",
                                            "hover:bg-primary/10 transition-colors duration-300")}
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex item-start gap-4">
                                <div>
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Computer className="h-6 w-6 text-primary"/>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full Stack Development</h4>
                                    <p className="text-muted-foreground">
                                        Building and maintaining scalable, 
                                        responsive web applications using <strong>React</strong>, 
                                        <strong> ASP.Net Web API</strong>, <strong> SQL</strong>, 
                                        and <strong> various databases</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex item-start gap-4">
                                <div>
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <User className="h-6 w-6 text-primary"/>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Collaboration & Agile Delivery</h4>
                                    <p className="text-muted-foreground">
                                        Experienced in cross-functional collaboration and working in Agile teams to deliver high-quality software on time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex item-start gap-4">
                                <div>
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Rocket className="h-6 w-6 text-primary"/>
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">DevOps & Cloud Engineering</h4>
                                    <p className="text-muted-foreground">
                                        Working with AWS, Docker, Terraform, and TeamCity to streamline CI/CD pipelines and ensure seamless deployments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};