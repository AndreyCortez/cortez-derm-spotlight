export interface Technology {
  id: string;
  name: string;
  description: string;
  image?: string; // Optional image URL or path
  priority: number; // 1 = highest priority, higher numbers = lower priority
  isActive: boolean;
}

export const technologies: Technology[] = [
  {
    id: "ulthera-ultrassom-microfocado",
    name: "Ulthera® (Ultrassom Microfocado)",
    description: "Tratamento não invasivo com efeito lifting que usa ultrassom para estimular o colágeno nas camadas profundas da pele, combatendo a flacidez.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    priority: 1,
    isActive: true
  },
  {
    id: "laser-de-picossegundos",
    name: "Laser de Picossegundos",
    description: "Tecnologia ultrarrápida para remoção de tatuagens e manchas escuras. Também melhora a textura da pele, poros e rugas finas com mínimo tempo de recuperação.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
    priority: 2,
    isActive: true
  },
  {
    id: "luz-intensa-pulsada",
    name: "Luz Intensa Pulsada (LIP)",
    description: "Utiliza flashes de luz para tratar manchas solares, vasos finos e vermelhidão (rosácea), resultando em uma pele com tom mais uniforme e luminosa.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
    priority: 3,
    isActive: true
  },
  {
    id: "radiofrequencia",
    name: "Radiofrequência",
    description: "Aquece a pele para contrair e estimular a produção de colágeno, combatendo a flacidez facial e corporal e definindo os contornos.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    priority: 4,
    isActive: true
  },
  {
    id: "coolsculpting-criolipolise",
    name: "CoolSculpting® (Criolipólise)",
    description: "Reduz a gordura localizada de forma não invasiva através do resfriamento controlado, com resultados visíveis e duradouros em áreas como abdômen e flancos.",
    image: "https://images.unsplash.com/photo-1616391182219-e080b10e4e51?auto=format&fit=crop&w=800&q=80",
    priority: 5,
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