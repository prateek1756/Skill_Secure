import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="w-9 h-9">
                <Sun className="h-5 w-5" />
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5 text-slate-700 dark:text-slate-300 transition-transform hover:rotate-180 duration-500" />
            ) : (
                <Moon className="h-5 w-5 text-slate-700 dark:text-slate-300 transition-transform hover:-rotate-12 duration-300" />
            )}
        </Button>
    );
};
