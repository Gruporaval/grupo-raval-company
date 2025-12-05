import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                className="relative h-10 w-10 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300"
            >
                <Sun className="h-5 w-5 text-primary" />
            </Button>
        );
    }

    const isDark = theme === "dark";

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="group relative h-10 w-10 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-primary/30 hover:scale-110 hover:rotate-12"
        >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

            {/* Icons container */}
            <div className="relative w-full h-full flex items-center justify-center">
                <Sun
                    weight="duotone"
                    className={`absolute h-5 w-5 text-primary transition-all duration-500 ${isDark
                            ? "rotate-90 scale-0 opacity-0"
                            : "rotate-0 scale-100 opacity-100"
                        }`}
                />
                <Moon
                    weight="duotone"
                    className={`absolute h-5 w-5 text-accent transition-all duration-500 ${isDark
                            ? "rotate-0 scale-100 opacity-100"
                            : "-rotate-90 scale-0 opacity-0"
                        }`}
                />
            </div>

            {/* Ripple effect on click */}
            <span className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-active:scale-100 transition-transform duration-300" />
        </Button>
    );
}
