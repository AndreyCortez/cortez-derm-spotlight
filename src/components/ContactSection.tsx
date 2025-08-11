import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Simular envio do formulário
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigada!",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contato" className="py-24 bg-gradient-medical">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agende sua consulta ou tire suas dúvidas. Estamos aqui para 
            cuidar da saúde e beleza da sua pele.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <Card className="p-8 shadow-medical border-0 bg-background">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="border-border focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone *
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="border-border focus:ring-primary"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  E-mail *
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="border-border focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos como podemos ajudar..."
                  rows={4}
                  className="border-border focus:ring-primary"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-hero hover:shadow-medical transition-all duration-300 text-lg py-4"
              >
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="p-8 shadow-card border-0 bg-background">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Av. Paulista, 1000 - Sala 1502<br />
                      Bela Vista, São Paulo - SP<br />
                      CEP: 01310-100
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <p className="text-muted-foreground">(11) 3456-7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                    <p className="text-muted-foreground">contato@drmariacortez.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-primary-foreground rounded-sm"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Horário</h4>
                    <p className="text-muted-foreground">
                      Segunda à Sexta: 8:00 - 18:00<br />
                      Sábado: 8:00 - 12:00
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-card border-0 bg-accent/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Redes Sociais
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-background rounded-xl hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">W</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      WhatsApp
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Agende pelo WhatsApp
                    </p>
                  </div>
                </a>

                <a 
                  href="https://instagram.com/drmariacortez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-background rounded-xl hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">IG</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Instagram
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      @drmariacortez
                    </p>
                  </div>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;