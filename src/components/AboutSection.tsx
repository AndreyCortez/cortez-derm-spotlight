import drMariaImage from "@/assets/MariaCortezHome.png";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"; // Importei o Card novamente

const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6">
        
        {/* --- GRID PRINCIPAL (Apresentação e Imagem) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12 gap-y-12 items-center">

          {/* COLUNA ESQUERDA (Texto): Ocupa 3 das 5 colunas no desktop */}
          <div className="lg:col-span-3 space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Dra. Maria Cortez
              <span className="block text-primary mt-2">Dermatologista</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Especialista pela Sociedade Brasileira de Dermatologia, com residência pelo Hospital
              do Servidor Público Municipal de São Paulo. Sua expertise é aplicada na preceptoria voluntária
              de Cosmiatria na mesma instituição.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

          {/* COLUNA DIREITA (Imagem): Ocupa 2 das 5 colunas e é maior */}
          <div className="relative lg:col-span-2 flex items-center justify-center">
             <div className="absolute inset-4 sm:inset-8 bg-gradient-accent rounded-3xl blur-3xl opacity-25 -z-10"></div>
             <img
              src={drMariaImage}
              alt="Dra. Maria Cortez"
              // A imagem agora pode ocupar toda a largura de sua coluna
              className="relative rounded-3xl shadow-medical w-full max-w-md lg:max-w-full mx-auto" 
            />
          </div>
        </div>

        {/* --- SEÇÃO INFERIOR (Missão, no layout antigo) --- */}
        <div className="mt-24 grid md:grid-cols-2 gap-12 items-stretch">
            {/* O grid pai tem 2 colunas, mas o card da missão vai ocupar as duas */}
            <div className="relative bg-card rounded-3xl p-8 shadow-medical md:col-span-2">
                {/* <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Missão</h3> */}
                <p className="text-muted-foreground leading-relaxed text-lg max-w-4xl mx-auto text-center">
                "Minha missão é unir conhecimento científico e ética para 
                oferecer um cuidado dermatológico individualizado. 
                Acredito em uma abordagem integral, olhando para você como um todo, 
                para promover saúde, realçar sua beleza natural com resultados refinados 
                e garantir seu bem-estar duradouro."
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;