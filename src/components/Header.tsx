import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Moon, Sun, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 glass-effect border-b border-border"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="h-6 w-6 text-primary" />
            </motion.div>
            <span className="text-xl font-bold bg-clip-text text-transparent gradient-bg">
              Hackathon 2025
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <Link to="/#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/#features" className="text-sm font-medium hover:text-primary transition-colors">
                Features
              </Link>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.div>
            </Button>

            <Link to="/login">
              <Button variant="outline" className="rounded-full">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="rounded-full glow-effect">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
