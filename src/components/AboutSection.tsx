import drMariaImage from "@/assets/MariaCortezHomeCropped.png";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-background py-20 lg:py-32 lg:pb-0">
      <div className="container mx-auto lg:px-24 px-12 ">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-x-12 gap-y-12 lg:gap-y-0">
          {/* BLOCO DE TEXTO SUPERIOR */}
          {/* TESTE: Adicionando !mb-0 para forçar a margem inferior a ser zero no desktop */}
          <div className="lg:col-span-3 lg:row-start-1 lg:row-span-1 lg:col-start-1 text-center lg:text-left order-1 lg:!mb-0 lg:pt-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Dra. Maria Cortez
              <span className="block text-primary mt-2">Dermatologista</span>
            </h1>
            {/* TESTE: Adicionando um estilo inline para forçar a margem zero no parágrafo */}
            <p 
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 mt-6"
              style={{ marginBottom: 0 }}
            >
              Especialista pela Sociedade Brasileira de Dermatologia, com residência pelo Hospital
              do Servidor Público Municipal de São Paulo. Sua expertise é aplicada na preceptoria voluntária
              de Cosmiatria na mesma instituição.
            </p>
          </div>

          {/* BLOCO DE TEXTO INFERIOR (MISSÃO E BOTÕES) */}
          {/* TESTE: Adicionando !mt-4 para forçar uma margem superior pequena e específica */}
          <div className="lg:col-span-3 lg:row-start-2 lg:row-span-2  lg:col-start-1 space-y-6 text-center lg:text-left order-3 lg:!mt-4 lg:pt-4 lg:pb-4">
            
            <blockquote className="border-l-4 border-primary/50 pl-6 italic text-muted-foreground relative text-lg">
              "Minha missão é unir conhecimento científico e ética para 
              oferecer um cuidado dermatológico individualizado. 
              Acredito em uma abordagem integral, olhando para você como um todo, 
              para promover saúde, realçar sua beleza natural com resultados refinados 
              e garantir seu bem-estar duradouro."
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
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
          
          {/* COLUNA DIREITA (IMAGEM) */}
          <div className="relative lg:col-span-2 lg:row-span-2 lg:row-start-1 lg:col-start-4 min-h-[400px] lg:min-h-0 order-2">
             <div className="absolute inset-4 sm:inset-8 bg-gradient-accent rounded-3xl blur-3xl opacity-25 -z-10"></div>
             <img
              src={drMariaImage}
              alt="Dra. Maria Cortez"
              className="relative rounded-3xl shadow-medical w-full h-full object-cover" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;