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
                            <div className="space-y-4">
                                <div>
                                    <h6 className="font-medium text-m mb-2">Frontend Development & UI/UX:</h6>
                                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                                        <li>• Architected and optimized <strong>React-based front-end applications</strong> serving thousands of daily users</li>
                                        <li>• Created <strong>animated UI components</strong> by transforming static SVGs into dynamic loaders, improving user experience</li>
                                        <li>• Implemented <strong>iframe security solutions</strong> for payment forms, managing biometric authentication and CORS policies</li>
                                    </ul>
                                </div>

                                <div>
                                    <h6 className="font-medium text-m mb-2">Backend & API Development:</h6>
                                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                                        <li>• Contributed to revenue-generating platform with <strong>99.9% uptime</strong></li>
                                        <li>• Developed and maintained <strong>RESTful APIs</strong> supporting high-volume payment processing</li>
                                        <li>• Lead <strong>error sessions</strong> using <strong>datadog</strong> to identify errors and delegate tasks</li>
                                        <li>• Wrote comprehensive <strong>unit tests</strong> for both positive and negative cases, improving test coverage.</li>
                                        <li>• Architected <strong>microservices migration</strong> from monolithic architecture, improving team dependency and system scalability</li>
                                    </ul>
                                </div>

                                <div>
                                    <h6 className="font-medium text-m mb-2">Data Integration & Messaging:</h6>
                                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                                        <li>• Implemented <strong>Apache Kafka topics</strong> for event-driven architecture</li>
                                        <li>• Built <strong>data consumer services</strong> to process and integrate streaming data across multiple systems</li>
                                    </ul>
                                </div>

                                <div>
                                    <h6 className="font-medium text-m mb-2">DevOps & Deployment:</h6>
                                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                                        <li>• Assisted with <strong>deployments</strong> as build master</li>
                                        <li>• Managed <strong>cross-origin security configurations</strong> for embedded payment solutions</li>
                                    </ul>
                                </div>
                            </div>
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
                                <li>• Implemented <strong>CI/CD pipelines</strong> for a console app I created</li>
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