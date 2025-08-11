import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-card" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Dra. Maria Cortez
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {["home", "sobre", "tratamentos", "tecnologias", "contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-foreground hover:text-primary transition-colors duration-300 capitalize font-medium"
              >
                {item}
              </button>
            ))}
          </nav>

          <Button
            onClick={() => scrollToSection("contato")}
            className="bg-gradient-hero hover:shadow-medical transition-all duration-300"
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;