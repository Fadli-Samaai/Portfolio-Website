import { Mail, MapPin, Send } from "lucide-react"
import { cn } from "../lib/utils"
import { useState } from "react"


export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
        },1500)
    };
    return (
        <section id="Contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <div className="seperate-background">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Get In <span className="text-primary"> Tocuh</span>
                    </h2>

                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Looking for a software engineer? Feel free to reach out.
                        I'm alwasys open to discussing new opportunities
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6 seperate-background">
                            Contact Information
                        </h3>
                        <div className="flex justify-center">
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4 bg-card p-8 rounded-lg shadow-xs">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary/80" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium">
                                        Email
                                    </h4>
                                    <a
                                        href="mailto:fadli.samaai@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                        Fadli.Samaai@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 bg-card p-8 rounded-lg shadow-xs">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary/80" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium">
                                        Location
                                    </h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Cape Town, Western Cape, South Africa
                                    </a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label 
                                    htmlFor="Name"
                                    className="block text-sm font-medium mb-2"
                                >Your Name</label>
                                <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Your Name..."
                                />
                            </div>
                            <div>
                                <label 
                                    htmlFor="Email"
                                    className="block text-sm font-medium mb-2"
                                >Your Email</label>
                                <input 
                                    type="text"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="YourEmail@gmail.com"
                                />
                            </div>
                            <div>
                                <label 
                                    htmlFor="Message"
                                    className="block text-sm font-medium mb-2"
                                >Your Message</label>
                                <textarea 
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-6 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>
                            <div className="flex justify-center">
                                <button 
                                    type="submit" 
                                    disabled = {isSubmitting}
                                    className={cn(
                                        "main-button flex items-center justify-center gap-2"
                                    )}>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    <Send size={16}/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};