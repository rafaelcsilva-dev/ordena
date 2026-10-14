import { useState } from "react";
import "./WeeklySchedule.css";
import Icon from "../../../components/Icon/Icon";
import { tasks as initialTasks, type Task } from "../../../data/tasks";

interface DayInfo {
  label: string;
  date: string;
}

export default function WeeklySchedule() {
  // 1. Estado para gerir e atualizar as tarefas dinamicamente
  const [taskList, setTaskList] = useState<Task[]>(initialTasks);

  // 2. Estado para guardar a tarefa selecionada para ser movida
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  // Função que gera os 7 dias da semana dinamicamente
  const getDaysOfWeek = (currentDate = new Date()): DayInfo[] => {
    const date = new Date(currentDate);
    const day = date.getDay();

    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(date.setDate(diff));

    const weekDays: DayInfo[] = [];
    const labels = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];

    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(monday);
      nextDay.setDate(monday.getDate() + i);

      const formattedDate = nextDay.toISOString().split("T")[0];

      weekDays.push({
        label: labels[i],
        date: formattedDate,
      });
    }

    return weekDays;
  };

  const weekDays = getDaysOfWeek();

  // Extrai os horários únicos ordenados com base no estado atual das tarefas
  const setTime: string[] = Array.from(
    new Set(taskList.map((t: Task) => t.startTime)),
  ).sort();

  // 3. Move a tarefa selecionada para a nova célula clicada (bloqueando sobreposição)
  const handleCellClick = (date: string, time: string) => {
    if (selectedTask) {
      // Verifica se já existe alguma tarefa na célula de destino
      const taskInTarget = taskList.find(
        (t: Task) => t.date === date && t.startTime === time,
      );

      // Se já houver uma tarefa lá, impede a sobreposição
      if (taskInTarget) {
        alert("Já existe uma tarefa neste horário e dia!");
        return;
      }

      // Caso contrário, move normalmente
      setTaskList((prev) =>
        prev.map((t) =>
          t.id === selectedTask.id ? { ...t, date: date, startTime: time } : t,
        ),
      );
      setSelectedTask(null);
    }
  };

  // 4. Seleciona ou desseleciona uma tarefa
  const handleTaskClick = (e: React.MouseEvent, task: Task) => {
    e.stopPropagation(); // Evita ativar o clique da célula pai
    if (selectedTask?.id === task.id) {
      setSelectedTask(null); // Desseleciona se for a mesma
    } else {
      setSelectedTask(task); // Seleciona a nova tarefa
    }
  };

  return (
    <div className="weekly-schedule">
      <header>
        <div>
          <Icon name="calendar_check" />
          <span>Planejamento Semanal</span>
        </div>

        <div>
          <button>
            <Icon name="edit" />
          </button>
        </div>
      </header>

      <table>
        <thead>
          <tr>
            <th scope="col">Hora</th>
            {weekDays.map((day, index) => (
              <th key={index} scope="col">
                {day.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {setTime.length === 0 ? (
            <tr>
              <td>-</td>
              {weekDays.map((_, i) => (
                <td key={i}>-</td>
              ))}
            </tr>
          ) : (
            setTime.map((time: string) => (
              <tr key={time}>
                <td>{time}</td>
                {weekDays.map((day) => {
                  const taskFound = taskList.find(
                    (t: Task) => t.date === day.date && t.startTime === time,
                  );

                  const isSelected = selectedTask?.id === taskFound?.id;

                  return (
                    <td
                      key={day.date}
                      onClick={() => handleCellClick(day.date, time)}
                      style={{ cursor: selectedTask ? "pointer" : "default" }}
                    >
                      {taskFound ? (
                        <div
                          className={`task ${taskFound.priority} ${isSelected ? "selected" : ""}`}
                          onClick={(e) => handleTaskClick(e, taskFound)}
                        >
                          <span>{taskFound.title}</span>
                        </div>
                      ) : (
                        "-"
                      )}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>

      <footer>
        <span>Prioridade:</span>
        <div>
          <span style={{ backgroundColor: "var(--color4)" }}></span>
          <span>Baixa</span>
        </div>
        <div>
          <span style={{ backgroundColor: "var(--color3)" }}></span>
          <span>Média</span>
        </div>
        <div>
          <span style={{ backgroundColor: "var(--color1)" }}></span>
          <span>Alta</span>
        </div>
      </footer>
    </div>
  );
}
