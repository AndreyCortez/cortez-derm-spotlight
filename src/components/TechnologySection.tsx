import { Card } from "@/components/ui/card";
import clinicTechImage from "@/assets/clinic-technology.jpg";

const TechnologySection = () => {
  const technologies = [
    {
      name: "Laser CO2 Fracionado",
      description: "Rejuvenescimento e tratamento de cicatrizes com precisão milimétrica.",
      benefits: ["Renovação celular", "Melhora da textura", "Redução de rugas", "Cicatrização rápida"]
    },
    {
      name: "IPL (Luz Intensa Pulsada)",
      description: "Tratamento de manchas, rosácea e rejuvenescimento facial.",
      benefits: ["Remove manchas", "Melhora a rosácea", "Estimula colágeno", "Sem tempo de recuperação"]
    },
    {
      name: "Radiofrequência",
      description: "Estimulação de colágeno para firmeza e rejuvenescimento da pele.",
      benefits: ["Firmeza da pele", "Reduz flacidez", "Melhora contorno", "Resultados progressivos"]
    },
    {
      name: "Dermatoscopia Digital",
      description: "Diagnóstico preciso de lesões com tecnologia de alta resolução.",
      benefits: ["Diagnóstico preciso", "Monitoramento digital", "Detecção precoce", "Arquivo digital"]
    }
  ];

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

        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="p-8 shadow-card border-0 bg-medical-light hover:shadow-medical transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {tech.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
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
      </div>
    </section>
  );
};

export default TechnologySection;