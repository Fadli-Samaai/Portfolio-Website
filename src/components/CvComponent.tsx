export const CvComponent = () => {
    return( 
        <section id="Cv" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl seperate-background">
                {/* Professional Experience */}
                <div className="space-y-6">
                    <h1 className="text-2xl md:text-4xl font-semibold text-primary">Professional Experience</h1>
                    
                    <div className="gradient-border p-6 card-hover">
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <h5 className="font-semibold text-lg">Junior Software Engineer</h5>
                                <span className="text-sm text-muted-foreground">Jan 2025 - May 2025</span>
                            </div>
                            <p className="font-medium text-primary">Ozow PTY LTD - Junior Software Engineer</p>
                            <ul className="text-sm text-muted-foreground space-y-2">
                                <li>• Architected and optimized <strong>React-based front-end applications</strong> serving thousands of daily users</li>
                                <li>• Developed and maintained <strong>RESTful APIs</strong> supporting high-volume payment processing</li>
                                <li>• Contributed to revenue-generating PayIn platform with <strong>99.9% uptime</strong></li>
                                <li>• Implemented <strong>CI/CD pipelines</strong> reducing deployment time by 60%</li>
                            </ul>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <h5 className="font-semibold text-lg">Software Engineer Graduate</h5>
                                <span className="text-sm text-muted-foreground">Feb 2024 - Jan 2025</span>
                            </div>
                            <p className="font-medium text-primary">Ozow PTY LTD - Graduate Program</p>
                            <ul className="text-sm text-muted-foreground space-y-2">
                                <li>• Cross-functional rotation through <strong>QA Engineering</strong>, <strong>DevOps</strong>, <strong>Data Analytics</strong>, and <strong>Software Development</strong></li>
                                <li>• Implemented <strong>automated testing frameworks</strong> improving code coverage</li>
                                <li>• Optimized <strong>cloud infrastructure</strong> using AWS and Terraform</li>
                                <li>• Enhanced system reliability through <strong>production bug resolution</strong> and performance monitoring</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Education */}
                <div className="space-y-4">
                    <h4 className="text-2xl md:text-4xl font-semibold text-primary">Education</h4>
                    <div className="gradient-border p-4 card-hover">
                        <div className="space-y-2">
                            <h5 className="font-semibold">BCom Information Systems</h5>
                            <p className="text-primary font-medium">University of the Western Cape (2021-2023)</p>
                            <p className="text-sm text-muted-foreground">Majors: Information Systems, Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};