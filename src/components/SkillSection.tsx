import { useState } from "react";
import { cn } from "../lib/utils";

interface Skills {
    name: string;
    category: string;
}

interface Category {
    name: string;
}

const skills: Skills[] = [
    {name: "HTML", category: "frontend" },
    {name: "CSS", category: "frontend" },
    {name: "JavaSript", category: "frontend" },
    {name: "TypeScript", category: "frontend" },
    {name: "C#", category: "frontend" },
    {name: "Python", category: "frontend" },
    {name: "PHP", category: "frontend" },
    {name: "SQL", category: "frontend" },
    {name: "React", category: "frontend" },
    {name: "Node.js", category: "backend" },
    {name: "Express", category: "backend" },
    {name: "MongoDB", category: "database" },
]

const category: Category[] = [
    {name: "all"},
    {name: "frontend"},
    {name: "backend"},
    {name: "Tools"},
] 

export const SkillSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    )
    return (
        <section id="Skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {category.map((category: Category, key) => {
                        return (
                        <button
                        key={key}
                        onClick={() => setActiveCategory(category.name)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category.name 
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary/70 text-foreground hover:bd-secondary"
                        )}
                        >
                            {category.name}
                        </button>
                    )})}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill: Skills, key) => {
                        return (
                        <div
                        key={key}
                        className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div>
                                <h3>
                                    {skill.name}
                                </h3>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </section>
    )
}