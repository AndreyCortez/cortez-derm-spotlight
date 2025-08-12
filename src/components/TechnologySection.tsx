import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getPriorityTechnologies } from "@/data/technologies";
import clinicTechImage from "@/assets/clinic-technology.jpg";

const TechnologySection = () => {
  const technologies = getPriorityTechnologies(4);

  return (
    <section id="tecnologias" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              Tecnologias Avançadas
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Utilizamos equipamentos de última geração para oferecer tratamentos 
              mais eficazes, seguros e com resultados superiores. Nossa clínica 
              está equipada com as mais modernas tecnologias em dermatologia.
            </p>
            <div className="bg-gradient-accent p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Compromisso com a Excelência
              </h3>
              <p className="text-muted-foreground">
                Investimos constantemente em tecnologia e capacitação para 
                garantir que nossos pacientes tenham acesso aos melhores 
                tratamentos disponíveis no mercado.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-2xl opacity-20"></div>
            <img
              src={clinicTechImage}
              alt="Tecnologias da clínica"
              className="relative rounded-3xl shadow-medical w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <Card key={tech.id} className="overflow-hidden shadow-card border-0 bg-medical-light hover:shadow-medical transition-all duration-300 group">
              {tech.image && (
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              )}
              
              <div className="p-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-5 h-5 bg-primary-foreground rounded-sm"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {tech.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/tecnologias">
              Ver Todas as Tecnologias
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;