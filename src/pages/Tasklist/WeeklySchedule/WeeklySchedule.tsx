import "./WeeklySchedule.css";
import Icon from "../../../components/Icon/Icon";
import { tasks, type Task } from "../../../data/tasks"; // Importa os dados e a interface Task

interface DayInfo {
  label: string;
  date: string;
}

export default function WeeklySchedule() {
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

  // Tipando explicitamente o map para o TypeScript saber que 't' é do tipo Task
  const setTime: string[] = Array.from(
    new Set(tasks.map((t: Task) => t.startTime)),
  ).sort();

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
                  const taskFound = tasks.find(
                    (t: Task) => t.date === day.date && t.startTime === time,
                  );

                  return (
                    <td key={day.date}>
                      {taskFound ? (
                        <div className={`task ${taskFound.priority}`}>
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
