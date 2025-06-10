import { useEffect, useState, useCallback, useMemo } from "react"

interface Language {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    animationDuration: number;
    text: string;
    color: string;
}

interface Position {
    x: number;
    y: number;
}

export const CodeLanguageBackground = () => {
    const [languages, setLanguages] = useState<Language[]>([]);


    const codeTexts = useMemo(() => [
        "JavaScript", "Python", "React", "TypeScript", "HTML", "CSS", 
        "Node.js", "Vue", "Angular", "Java", "C++", "Go", "Rust", 
        "PHP", "Redux", "Swift", "Postgres", "C#", "SQL", "MongoDB",
        "Git", "Docker", "AWS", "API", "JSON", "Vite", "REST", "GraphQL"
    ], []);

    const colors = useMemo(() => [
        "#3B82F6", "#EF4444", "#10B981", "#F59E0B", "#8B5CF6", 
        "#EC4899", "#06B6D4", "#84CC16", "#F97316", "#6366F1",
        "#14B8A6", "#F43F5E", "#8B5A2B", "#059669", "#DC2626",
        "#7C3AED", "#DB2777", "#0891B2", "#65A30D", "#EA580C"
    ], []);

    const getRandomItem = useCallback((array: string[]) => {
        return array[Math.floor(Math.random() * array.length)];
    }, []);

    const isPositionValid = useCallback((newPos: Position, existingPositions: Position[], minDistance: number = 8) => {
        return existingPositions.every(pos => {
            const distance = Math.sqrt(
                Math.pow(newPos.x - pos.x, 2) + Math.pow(newPos.y - pos.y, 2)
            );
            return distance >= minDistance;
        });
    }, []);

    // Generate position with collision detection
    const generateValidPosition = useCallback((existingPositions: Position[], maxAttempts: number = 50) => {
        for (let attempt = 0; attempt < maxAttempts; attempt++) {
            const newPos = {
                x: Math.random() * 95 + 2.5,
                y: Math.random() * 95 + 2.5
            };

            if (isPositionValid(newPos, existingPositions)) {
                return newPos;
            }
        }
        return {
            x: Math.random() * 95 + 2.5,
            y: Math.random() * 95 + 2.5
        };
    }, [isPositionValid]);

    const generateLanguages = useCallback(() => {
        const numberOfLanguages = Math.floor(
            (window.innerWidth * window.innerHeight) / 25000
        );

        const newLanguages: Language[] = [];
        const usedPositions: Position[] = [];

        for (let i = 0; i < numberOfLanguages; i++) {
            const position = generateValidPosition(usedPositions);
            usedPositions.push(position);

            newLanguages.push({
                id: i,
                size: Math.random() * 8 + 12,
                x: position.x,
                y: position.y,
                opacity: Math.random() * 0.4 + 0.3,
                animationDuration: Math.random() * 4 + 4,
                text: getRandomItem(codeTexts),
                color: getRandomItem(colors)
            });
        }

        setLanguages(newLanguages);
    }, [codeTexts, colors, getRandomItem, generateValidPosition]);

    useEffect(() => {
        let resizeTimeout: NodeJS.Timeout;

        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                generateLanguages();
            }, 250);
        };

        generateLanguages();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
        };
    }, [generateLanguages]);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {languages.map((language: Language) => (
                <div 
                    key={language.id} 
                    className="language animate-pulse-subtle font-mono select-none transition-opacity duration-1000"
                    style={{
                        fontSize: `${language.size}px`,
                        left: `${language.x}%`,
                        top: `${language.y}%`,
                        opacity: language.opacity,
                        animationDuration: `${language.animationDuration}s`,
                        position: 'absolute',
                        color: language.color,
                        fontWeight: Math.random() > 0.5 ? 'bold' : 'normal', 
                        transform: `rotate(${Math.random() * 10 - 5}deg)`,
                    }} 
                >
                    {language.text}
                </div>
            ))}        
        </div>
    )
}