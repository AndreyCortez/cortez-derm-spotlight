import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllTreatmentsSorted } from "@/data/treatments";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TreatmentsPage = () => {
  const treatments = getAllTreatmentsSorted();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section className="py-24 bg-gradient-medical">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Button variant="outline" asChild className="mb-8">
                <Link to="/" className="inline-flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar ao início
                </Link>
              </Button>
              
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Todos os Tratamentos
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Conheça toda nossa gama de tratamentos dermatológicos especializados, 
                combinando expertise médica com as mais avançadas tecnologias.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatments.map((treatment, index) => (
                <Card key={treatment.id} className="p-8 shadow-card border-0 bg-background hover:shadow-medical transition-all duration-300 group">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-6 h-6 bg-primary-foreground rounded-full"></div>
                      </div>
                      <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                        Prioridade {treatment.priority}
                      </span>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {treatment.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {treatment.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {treatment.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-hero rounded-full"></div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-card p-8 rounded-2xl max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Precisa de um tratamento específico?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Entre em contato conosco para uma consulta personalizada e 
                  descubra qual tratamento é ideal para você.
                </p>
                <Button asChild className="bg-gradient-hero text-primary-foreground hover:opacity-90">
                  <Link to="/#contato">
                    Agendar Consulta
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TreatmentsPage;