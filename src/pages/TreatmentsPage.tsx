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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <span className="absolute top-3 right-3 text-xs bg-black/70 text-white px-2 py-1 rounded-full">
                        Prioridade {treatment.priority}
                      </span>
                    </div>
                  )}
                  
                  <div className="p-6 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-5 h-5 bg-primary-foreground rounded-sm"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {treatment.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {treatment.description}
                        </p>
                      </div>
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