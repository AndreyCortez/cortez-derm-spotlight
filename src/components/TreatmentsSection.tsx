import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getPriorityTreatments } from "@/data/treatments";

const TreatmentsSection = () => {
  const treatments = getPriorityTreatments(6);

  return (
    <section id="tratamentos" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Tratamentos Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma ampla gama de tratamentos dermatológicos, 
            combinando expertise médica com as mais avançadas tecnologias 
            para garantir os melhores resultados.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {treatments.map((treatment, index) => (
            <Card key={treatment.id} className="overflow-hidden shadow-card border-0 bg-background hover:shadow-medical transition-all duration-300 group">
              {treatment.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              )}
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {treatment.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/tratamentos">
              Ver Todos os Tratamentos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;