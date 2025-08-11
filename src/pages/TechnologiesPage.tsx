import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllTechnologiesSorted } from "@/data/technologies";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import clinicTechImage from "@/assets/clinic-technology.jpg";

const TechnologiesPage = () => {
  const technologies = getAllTechnologiesSorted();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24">
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Button variant="outline" asChild className="mb-8">
                <Link to="/" className="inline-flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Voltar ao início
                </Link>
              </Button>
              
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Tecnologias Avançadas
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Conheça todos os equipamentos e tecnologias de última geração 
                que utilizamos para oferecer os melhores resultados em dermatologia.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-foreground">
                  Equipamentos de Última Geração
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nossa clínica está equipada com as mais modernas tecnologias em dermatologia, 
                  garantindo tratamentos mais eficazes, seguros e com resultados superiores. 
                  Cada equipamento é operado por profissionais especializados e certificados.
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

            <div className="grid md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <Card key={tech.id} className="p-8 shadow-card border-0 bg-medical-light hover:shadow-medical transition-all duration-300">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
                      </div>
                      <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">
                        Prioridade {tech.priority}
                      </span>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {tech.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {tech.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {tech.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-gradient-hero rounded-full"></div>
                          <span className="text-sm text-foreground">{benefit}</span>
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
                  Quer conhecer mais sobre nossas tecnologias?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Agende uma consulta e conheça pessoalmente nossos equipamentos 
                  e como eles podem ajudar no seu tratamento.
                </p>
                <Button asChild className="bg-gradient-hero text-primary-foreground hover:opacity-90">
                  <Link to="/#contato">
                    Agendar Visita
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

export default TechnologiesPage;