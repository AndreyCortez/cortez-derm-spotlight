import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { contactData } from "@/data/contact";
import ReactGA from 'react-ga4';

// Ícones para os botões (SVG)
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);


const ContactSection = () => {
  // O estado e as funções do formulário não são mais necessários,
  // mas podem ser mantidos caso você queira reutilizá-los no futuro.

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* --- ÁREA DO FORMULÁRIO ATUALIZADA --- */}
          {/* O card agora contém os botões para WhatsApp e Instagram */}
          <Card className="p-8 shadow-card border-0 bg-background flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
              Contato Rápido e Redes Sociais
            </h3>
            <p className="text-muted-foreground mb-8 text-center">
              Prefere um contato mais direto? Nos envie uma mensagem ou conheça nosso trabalho.
            </p>
            
            <div className="space-y-4">
              <Button asChild size="lg" className="w-full bg-gradient-hero hover:shadow-medical transition-all duration-300 text-lg py-6 flex items-center gap-3">
                <a 
                  href={`https://wa.me/${contactData.contact.phoneNumber}?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => ReactGA.event({ category: "Contact", action: "Click", label: "WhatsApp Button" })}
                >
                  <WhatsAppIcon />
                  Chamar no WhatsApp
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg py-6 flex items-center gap-3">
                 <a 
                  href={contactData.socialMedia.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => ReactGA.event({ category: "Contact", action: "Click", label: "Instagram Button" })}
                >
                  <InstagramIcon />
                  Ver no Instagram
                </a>
              </Button>
            </div>
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
                style={{ border: 0, minHeight: '300px' }} // Adicionado minHeight para melhor responsividade
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