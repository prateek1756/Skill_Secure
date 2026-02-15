import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Bookmark } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useBookmarks } from "@/lib/bookmarkStore";
import { NotificationCenter } from "./NotificationCenter";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { bookmarkCount } = useBookmarks();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 shadow-soft">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm">
            SB
          </div>
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skill Secure
          </Link>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/internships" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
            Internships
          </Link>
          <Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link to="/saved-internships">
              <Bookmark className="h-5 w-5" />
              {bookmarkCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  {bookmarkCount}
                </Badge>
              )}
            </Link>
          </Button>
          <NotificationCenter />
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <Link to="/login-page">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/signup-page">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
          <nav className="flex flex-col gap-4 p-6">
            <Link
              to="/"
              className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/internships"
              className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Internships
            </Link>
            <Link
              to="/about"
              className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex gap-2">
              <Button asChild size="sm" variant="outline" className="flex-1">
                <Link to="/login-page" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
              </Button>
              <Button asChild size="sm" className="flex-1">
                <Link to="/signup-page" onClick={() => setIsMenuOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header >
  );
};
