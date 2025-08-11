import { Card } from "@/components/ui/card";
import drMariaImage from "@/assets/dr-maria-cortez.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-2xl opacity-30"></div>
            <img
              src={drMariaImage}
              alt="Dra. Maria Cortez"
              className="relative rounded-3xl shadow-medical w-full max-w-md mx-auto"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Sobre a Dra. Maria Cortez
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com mais de 15 anos de experiência em dermatologia, a Dra. Maria Cortez 
                é especialista reconhecida no tratamento de doenças de pele e procedimentos 
                estéticos. Formada pela Universidade de São Paulo (USP) e com residência 
                no Hospital das Clínicas, ela combina conhecimento científico com as 
                mais avançadas tecnologias disponíveis.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 shadow-card border-0 bg-medical-light">
                <h3 className="text-xl font-semibold text-foreground mb-3">Formação</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Medicina - USP</li>
                  <li>• Residência em Dermatologia</li>
                  <li>• Pós-graduação em Dermatologia Estética</li>
                </ul>
              </Card>
              
              <Card className="p-6 shadow-card border-0 bg-accent/20">
                <h3 className="text-xl font-semibold text-foreground mb-3">Certificações</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sociedade Brasileira de Dermatologia</li>
                  <li>• Certificação em Laser Terapia</li>
                  <li>• Especialização em Oncologia Cutânea</li>
                </ul>
              </Card>
            </div>

            <div className="bg-gradient-medical p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                "Minha missão é proporcionar aos meus pacientes não apenas tratamentos 
                eficazes, mas também um cuidado humanizado e personalizado. Acredito 
                que cada pele é única e merece atenção especializada."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;