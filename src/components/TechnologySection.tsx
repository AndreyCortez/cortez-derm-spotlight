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
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              Tecnologias Avançadas
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Utilizamos equipamentos de última geração para oferecer tratamentos 
              mais eficazes, seguros e com resultados superiores. Nossa clínica 
              está equipada com as mais modernas tecnologias em dermatologia.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tech.description}
                  </p>
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