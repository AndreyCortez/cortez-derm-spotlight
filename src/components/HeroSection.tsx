import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dermatology.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-medical">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full">
              <span className="text-primary font-semibold">Dermatologia Especializada</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Dra. Maria Cortez
              <span className="block text-primary mt-2">Dermatologista</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Especialista em dermatologia com mais de 15 anos de experiência. 
              Cuidando da saúde e beleza da sua pele com tecnologia avançada 
              e atendimento personalizado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection("contato")}
                className="bg-gradient-hero hover:shadow-medical transition-all duration-300 text-lg px-8 py-4"
              >
                Agendar Consulta
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("sobre")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-4"
              >
                Conheça a Doutora
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-card rounded-3xl p-8 shadow-medical">
              <h3 className="text-2xl font-bold text-foreground mb-6">Especialidades</h3>
              <div className="space-y-4">
                {[
                  "Dermatologia Clínica",
                  "Dermatologia Estética",
                  "Laser e Tecnologias Avançadas", 
                  "Prevenção do Câncer de Pele",
                  "Tratamento de Acne"
                ].map((specialty, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-hero rounded-full"></div>
                    <span className="text-foreground font-medium">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;