// src/data/tasks.ts
export interface Task {
  id: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  priority: "alta" | "média" | "baixa" | "neutro";
  type: string;
}

export const tasks: Task[] = [
  {
    id: "1",
    title: "Planejamento Semanal",
    description: "Organizar metas da semana",
    date: "2026-10-12", // Segunda
    startTime: "08:00",
    priority: "baixa",
    type: "trabalho",
  },

  {
    id: "2",
    title: "Reunião de Alinhamento",
    description: "Rever prazos com o time",
    date: "2026-10-12", // Segunda
    startTime: "14:30",
    priority: "alta",
    type: "trabalho",
  },

  {
    id: "3",
    title: "Academia",
    description: "Treino de superiores",
    date: "2026-10-13", // Terça
    startTime: "07:00",
    priority: "neutro",
    type: "saúde",
  },

  {
    id: "4",
    title: "Desenvolvimento Front-end",
    description: "Ajustar grade semanal do app",
    date: "2026-10-13", // Terça
    startTime: "10:00",
    priority: "alta",
    type: "estudo",
  },

  {
    id: "5",
    title: "Almoço com cliente",
    description: "Discutir novos requisitos",
    date: "2026-10-13", // Terça
    startTime: "12:30",
    priority: "média",
    type: "trabalho",
  },

  {
    id: "6",
    title: "Revisão de Código",
    description: "Olhar Pull Requests",
    date: "2026-10-14", // Quarta
    startTime: "09:00",
    priority: "média",
    type: "trabalho",
  },
];
