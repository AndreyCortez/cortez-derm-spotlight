const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Dra. Maria Cortez</h3>
            <p className="text-background/80 leading-relaxed">
              Especialista em dermatologia dedicada a cuidar da saúde e 
              beleza da sua pele com excelência e tecnologia de ponta.
            </p>
            <div className="space-y-2">
              <p className="text-background/80">
                <strong>CRM:</strong> 123.456-SP
              </p>
              <p className="text-background/80">
                <strong>RQE:</strong> 78.901
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Links Rápidos</h4>
            <nav className="space-y-3">
              {["home", "sobre", "tratamentos", "tecnologias", "contato"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block text-background/80 hover:text-background transition-colors duration-300 capitalize"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Contato</h4>
            <div className="space-y-3 text-background/80">
              <p>Av. Paulista, 1000 - Sala 1502</p>
              <p>Bela Vista, São Paulo - SP</p>
              <p>CEP: 01310-100</p>
              <p>(11) 3456-7890</p>
              <p>contato@drmariacortez.com.br</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Dra. Maria Cortez. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;