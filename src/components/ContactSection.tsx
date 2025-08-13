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
            {/* Google Maps */}
            <Card className="p-0 shadow-card border-0 bg-background overflow-hidden">
              <div className="p-6 pb-0">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Localização
                </h3>
              </div>
              <div className="h-64 w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0963767413406!2d-46.65418938498474!3d-23.56168598468213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt!2sbr!4v1635789012345!5m2!1spt!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Clínica Dra. Maria Cortez"
                />
              </div>
              <div className="p-6">
                <p className="text-muted-foreground">
                  Av. Paulista, 1000 - Sala 1502<br />
                  Bela Vista, São Paulo - SP<br />
                  CEP: 01310-100
                </p>
              </div>
            </Card>

            {/* Google Reviews */}
            <Card className="p-0 shadow-card border-0 bg-background overflow-hidden">
              <div className="p-6 pb-0">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Avaliações no Google
                </h3>
              </div>
              <div className="h-64 w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0963767413406!2d-46.65418938498474!3d-23.56168598468213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt!2sbr!4v1635789012345!5m2!1spt!2sbr&reviews=1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Avaliações da Clínica Dra. Maria Cortez"
                />
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="p-8 shadow-card border-0 bg-accent/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">(11) 3456-7890</p>
                    <p className="text-sm text-muted-foreground">Segunda à Sexta: 8:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">✉️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">contato@drmariacortez.com.br</p>
                    <p className="text-sm text-muted-foreground">Resposta em até 24h</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;