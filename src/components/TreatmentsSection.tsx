import { Card } from "@/components/ui/card";

const TreatmentsSection = () => {
  const treatments = [
    {
      title: "Dermatologia Clínica",
      description: "Diagnóstico e tratamento de doenças de pele como acne, dermatite, psoríase e outras condições dermatológicas.",
      features: ["Consultas especializadas", "Biópsias", "Tratamento de lesões", "Acompanhamento contínuo"]
    },
    {
      title: "Dermatologia Estética",
      description: "Procedimentos para rejuvenescimento e melhoria da aparência da pele com técnicas modernas e seguras.",
      features: ["Preenchimentos", "Botox", "Peelings químicos", "Microagulhamento"]
    },
    {
      title: "Prevenção de Câncer de Pele",
      description: "Rastreamento e diagnóstico precoce do câncer de pele através de mapeamento corporal e dermatoscopia.",
      features: ["Mapeamento digital", "Dermatoscopia", "Biópsia de lesões", "Acompanhamento preventivo"]
    },
    {
      title: "Tratamento de Acne",
      description: "Abordagem completa para diferentes tipos de acne, desde casos leves até os mais severos.",
      features: ["Análise personalizada", "Tratamentos tópicos", "Procedimentos específicos", "Acompanhamento regular"]
    },
    {
      title: "Tricologia",
      description: "Diagnóstico e tratamento de problemas capilares como alopecia, dermatite seborreica e outras condições.",
      features: ["Análise do couro cabeludo", "Tratamentos específicos", "Orientação nutricional", "Protocolo personalizado"]
    },
    {
      title: "Melasma e Manchas",
      description: "Tratamento especializado para manchas de pele, melasma e hiperpigmentações com resultados eficazes.",
      features: ["Diagnóstico preciso", "Laser específico", "Peelings direcionados", "Manutenção preventiva"]
    }
  ];

  return (
    <section id="tratamentos" className="py-24 bg-gradient-medical">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <Card key={index} className="p-8 shadow-card border-0 bg-background hover:shadow-medical transition-all duration-300 group">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-6 h-6 bg-primary-foreground rounded-full"></div>
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
      </div>
    </section>
  );
};

export default TreatmentsSection;