import "./Dashboard.css";

import InDevelopment from "../../components/InDevelopment/InDevelopment";
import WeeklySchedule from "./WeeklySchedule/WeeklySchedule";

export default function Dashboard() {
  return (
    <section className="dashboard-page">
      {/*<InDevelopment />*/}

      <header>
        <div className="card">
          <span>Próxima tarefa</span>
          <div>
            <span>Nenhuma tarefa registrada.</span>
          </div>
        </div>

        <div className="card">
          <span>Próximo compromisso</span>
          <div>
            <span>Nenhum compromisso registrado.</span>
          </div>
        </div>

        <div className="card">
          <span>Projeto atual</span>
          <div>
            <span>Nenhum projeto ativo.</span>
          </div>
        </div>

        <div className="card">
          <span>Lembretes</span>
          <div>
            <span>Nenhum lembrete registrado.</span>
          </div>
        </div>
      </header>

      <WeeklySchedule />
    </section>
  );
}
