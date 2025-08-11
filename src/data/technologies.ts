export interface Technology {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  priority: number; // 1 = highest priority, higher numbers = lower priority
  isActive: boolean;
}

export const technologies: Technology[] = [
  {
    id: "laser-co2",
    name: "Laser CO2 Fracionado",
    description: "Rejuvenescimento e tratamento de cicatrizes com precisão milimétrica.",
    benefits: ["Renovação celular", "Melhora da textura", "Redução de rugas", "Cicatrização rápida"],
    priority: 1,
    isActive: true
  },
  {
    id: "ipl",
    name: "IPL (Luz Intensa Pulsada)",
    description: "Tratamento de manchas, rosácea e rejuvenescimento facial.",
    benefits: ["Remove manchas", "Melhora a rosácea", "Estimula colágeno", "Sem tempo de recuperação"],
    priority: 2,
    isActive: true
  },
  {
    id: "radiofrequencia",
    name: "Radiofrequência",
    description: "Estimulação de colágeno para firmeza e rejuvenescimento da pele.",
    benefits: ["Firmeza da pele", "Reduz flacidez", "Melhora contorno", "Resultados progressivos"],
    priority: 3,
    isActive: true
  },
  {
    id: "dermatoscopia",
    name: "Dermatoscopia Digital",
    description: "Diagnóstico preciso de lesões com tecnologia de alta resolução.",
    benefits: ["Diagnóstico preciso", "Monitoramento digital", "Detecção precoce", "Arquivo digital"],
    priority: 4,
    isActive: true
  },
  {
    id: "criolipolise",
    name: "Criolipólise",
    description: "Redução de gordura localizada através do congelamento controlado das células adiposas.",
    benefits: ["Redução de medidas", "Não invasivo", "Sem cirurgia", "Resultados duradouros"],
    priority: 5,
    isActive: true
  },
  {
    id: "ultrasom-focado",
    name: "Ultrasom Microfocado",
    description: "Lifting não cirúrgico com estímulo profundo do colágeno para firmeza da pele.",
    benefits: ["Lifting natural", "Sem cortes", "Resultados graduais", "Estimula colágeno"],
    priority: 6,
    isActive: true
  },
  {
    id: "laser-nd-yag",
    name: "Laser Nd:YAG",
    description: "Tratamento de vasos, remoção de tatuagens e rejuvenescimento vascular.",
    benefits: ["Remove vasos", "Elimina tatuagens", "Melhora textura", "Procedimento seguro"],
    priority: 7,
    isActive: true
  },
  {
    id: "plasma-rico",
    name: "Plasma Rico em Plaquetas (PRP)",
    description: "Bioestimulação natural usando fatores de crescimento do próprio paciente.",
    benefits: ["100% natural", "Estimula renovação", "Melhora qualidade", "Sem rejeição"],
    priority: 8,
    isActive: true
  }
];

// Utility functions for easy management
export const getActiveTechnologies = () => technologies.filter(t => t.isActive);

export const getPriorityTechnologies = (limit: number = 4) => 
  getActiveTechnologies()
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);

export const getAllTechnologiesSorted = () => 
  getActiveTechnologies().sort((a, b) => a.priority - b.priority);

// Functions to manage technologies (for easy editing in code)
export const addTechnology = (technology: Omit<Technology, 'id'>) => {
  const newTechnology: Technology = {
    ...technology,
    id: technology.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  };
  technologies.push(newTechnology);
  return newTechnology;
};

export const updateTechnologyPriority = (id: string, newPriority: number) => {
  const technology = technologies.find(t => t.id === id);
  if (technology) {
    technology.priority = newPriority;
  }
};

export const toggleTechnologyStatus = (id: string) => {
  const technology = technologies.find(t => t.id === id);
  if (technology) {
    technology.isActive = !technology.isActive;
  }
};

export const removeTechnology = (id: string) => {
  const index = technologies.findIndex(t => t.id === id);
  if (index > -1) {
    technologies.splice(index, 1);
  }
};