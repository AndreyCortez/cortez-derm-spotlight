export interface Treatment {
  id: string;
  title: string;
  description: string;
  features: string[];
  priority: number; // 1 = highest priority, higher numbers = lower priority
  isActive: boolean;
}

export const treatments: Treatment[] = [
  {
    id: "dermatologia-clinica",
    title: "Dermatologia Clínica",
    description: "Diagnóstico e tratamento de doenças de pele como acne, dermatite, psoríase e outras condições dermatológicas.",
    features: ["Consultas especializadas", "Biópsias", "Tratamento de lesões", "Acompanhamento contínuo"],
    priority: 1,
    isActive: true
  },
  {
    id: "dermatologia-estetica",
    title: "Dermatologia Estética",
    description: "Procedimentos para rejuvenescimento e melhoria da aparência da pele com técnicas modernas e seguras.",
    features: ["Preenchimentos", "Botox", "Peelings químicos", "Microagulhamento"],
    priority: 2,
    isActive: true
  },
  {
    id: "prevencao-cancer",
    title: "Prevenção de Câncer de Pele",
    description: "Rastreamento e diagnóstico precoce do câncer de pele através de mapeamento corporal e dermatoscopia.",
    features: ["Mapeamento digital", "Dermatoscopia", "Biópsia de lesões", "Acompanhamento preventivo"],
    priority: 3,
    isActive: true
  },
  {
    id: "tratamento-acne",
    title: "Tratamento de Acne",
    description: "Abordagem completa para diferentes tipos de acne, desde casos leves até os mais severos.",
    features: ["Análise personalizada", "Tratamentos tópicos", "Procedimentos específicos", "Acompanhamento regular"],
    priority: 4,
    isActive: true
  },
  {
    id: "tricologia",
    title: "Tricologia",
    description: "Diagnóstico e tratamento de problemas capilares como alopecia, dermatite seborreica e outras condições.",
    features: ["Análise do couro cabeludo", "Tratamentos específicos", "Orientação nutricional", "Protocolo personalizado"],
    priority: 5,
    isActive: true
  },
  {
    id: "melasma-manchas",
    title: "Melasma e Manchas",
    description: "Tratamento especializado para manchas de pele, melasma e hiperpigmentações com resultados eficazes.",
    features: ["Diagnóstico preciso", "Laser específico", "Peelings direcionados", "Manutenção preventiva"],
    priority: 6,
    isActive: true
  },
  {
    id: "laser-depilacao",
    title: "Laser para Depilação",
    description: "Remoção definitiva de pelos indesejados com tecnologia laser de última geração.",
    features: ["Todas as fototipos", "Resultados duradouros", "Procedimento seguro", "Redução progressiva"],
    priority: 7,
    isActive: true
  },
  {
    id: "rejuvenescimento-facial",
    title: "Rejuvenescimento Facial",
    description: "Protocolos completos para renovação da pele e redução dos sinais de envelhecimento.",
    features: ["Múltiplas técnicas", "Resultados naturais", "Protocolos personalizados", "Acompanhamento total"],
    priority: 8,
    isActive: true
  }
];

// Utility functions for easy management
export const getActiveTreatments = () => treatments.filter(t => t.isActive);

export const getPriorityTreatments = (limit: number = 6) => 
  getActiveTreatments()
    .sort((a, b) => a.priority - b.priority)
    .slice(0, limit);

export const getAllTreatmentsSorted = () => 
  getActiveTreatments().sort((a, b) => a.priority - b.priority);

// Functions to manage treatments (for easy editing in code)
export const addTreatment = (treatment: Omit<Treatment, 'id'>) => {
  const newTreatment: Treatment = {
    ...treatment,
    id: treatment.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  };
  treatments.push(newTreatment);
  return newTreatment;
};

export const updateTreatmentPriority = (id: string, newPriority: number) => {
  const treatment = treatments.find(t => t.id === id);
  if (treatment) {
    treatment.priority = newPriority;
  }
};

export const toggleTreatmentStatus = (id: string) => {
  const treatment = treatments.find(t => t.id === id);
  if (treatment) {
    treatment.isActive = !treatment.isActive;
  }
};

export const removeTreatment = (id: string) => {
  const index = treatments.findIndex(t => t.id === id);
  if (index > -1) {
    treatments.splice(index, 1);
  }
};