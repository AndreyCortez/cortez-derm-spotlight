import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import drMariaImage from "@/assets/dr-maria-cortez.jpg";

const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-medical pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full">
              <span className="text-primary font-semibold">Dermatologia Especializada</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Dra. Maria Cortez
              <span className="block text-primary mt-2">Dermatologista</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Com mais de 15 anos de experiência em dermatologia, especialista reconhecida 
              no tratamento de doenças de pele e procedimentos estéticos. Formada pela USP 
              e com residência no Hospital das Clínicas.
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
                onClick={() => scrollToSection("tratamentos")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-4"
              >
                Ver Tratamentos
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-2xl opacity-30"></div>
            <img
              src={drMariaImage}
              alt="Dra. Maria Cortez"
              className="relative rounded-3xl shadow-medical w-full max-w-md mx-auto"
            />
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-12">
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

          <div className="relative bg-card rounded-3xl p-8 shadow-medical">
            <h3 className="text-2xl font-bold text-foreground mb-6">Missão</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              "Minha missão é proporcionar aos meus pacientes não apenas tratamentos 
              eficazes, mas também um cuidado humanizado e personalizado. Acredito 
              que cada pele é única e merece atenção especializada."
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-6 text-center">
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">15+</h4>
                <p className="text-sm text-muted-foreground">Anos de Experiência</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-2">1000+</h4>
                <p className="text-sm text-muted-foreground">Pacientes Atendidos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;