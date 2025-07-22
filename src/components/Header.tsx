import { Button } from "@/components/ui/button";
import { Code, Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">TechFlow</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#about" className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-110 scroll-smooth">
              About
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-110 scroll-smooth">
              Services
            </a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-110 scroll-smooth">
              Portfolio
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-110 scroll-smooth">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-gradient transform hover:scale-110 transition-all duration-300">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden transform hover:scale-110 transition-all duration-300">
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>
    </header>
  );
};