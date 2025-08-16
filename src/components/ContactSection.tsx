import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { contactData } from "@/data/contact";

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
    <section id="contato" className="bg-card py-24">
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

        {/* ATUALIZAÇÃO: Grid reordenado e alinhado com flexbox */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* 1. Envie uma Mensagem (Topo-Esquerda) */}
          <Card className="p-8 shadow-card border-0 bg-background">
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

          {/* 2. Localização (Topo-Direita) */}
          <Card className="p-0 shadow-card border-0 bg-background overflow-hidden flex flex-col">
            <div className="p-6 pb-0">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Localização
              </h3>
            </div>
            <div className="h-full w-full flex-grow">
              <iframe 
                src={contactData.googleServices.mapsEmbedUrl}
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
                {contactData.address.street}<br />
                {contactData.address.neighborhood}, {contactData.address.city} - {contactData.address.state}<br />
                CEP: {contactData.address.zipCode}
              </p>
            </div>
          </Card>

          {/* 3. Informações de Contato (Fundo-Esquerda) */}
          <Card className="p-8 shadow-card border-0 bg-accent/20 flex flex-col">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-4 flex-grow flex flex-col justify-center">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground text-xl">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{contactData.contact.phone}</p>
                  <p className="text-sm text-muted-foreground">{contactData.contact.workingHours}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground text-xl">✉️</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{contactData.contact.email}</p>
                  <p className="text-sm text-muted-foreground">{contactData.contact.responseTime}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* 4. Avaliações no Google (Fundo-Direita) */}
           <Card className="p-8 shadow-card border-0 bg-background flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                O que nossos pacientes dizem
              </h3>
              <div className="flex items-center gap-2 text-amber-500">
                {/* Renderiza 5 estrelas */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                ))}
              </div>
              <p className="text-muted-foreground mt-4 mb-6">
                Clique no botão abaixo para ler as avaliações de nossos pacientes no Google.
              </p>
              <Button 
                asChild 
                className="bg-gradient-hero hover:shadow-medical transition-all duration-300"
              >
                <a 
                  href={contactData.googleServices.reviewsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Ver Avaliações no Google
                </a>
              </Button>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
