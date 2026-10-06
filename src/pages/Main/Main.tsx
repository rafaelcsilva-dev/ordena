import { useState } from "react";

import "./Main.css";
import Icon from "../../components/Icon/Icon";

import Dashboard from "../Dashboard/Dashboard";
import Tasklist from "../Tasklist/Tasklist";
import Projects from "../Projects/Projects";
import Notepad from "../Notepad/Notepad";
import Settings from "../Settings/Settings";

const PAGES = {
  dashboard: { title: "Dashboard", Component: Dashboard },
  tasklist: { title: "Tarefas", Component: Tasklist },
  projects: { title: "Projetos", Component: Projects },
  notepad: { title: "Notas", Component: Notepad },
  settings: { title: "Configurações", Component: Settings },
};

export default function Main() {
  const [activePage, setActivePage] = useState<keyof typeof PAGES>("dashboard");

  const { title, Component: CurrentPage } = PAGES[activePage];

  return (
    <div className="main-page">
      <aside>
        <div>
          <img src="./public/favicon.png" alt="Ícone do Ordena" />
          <span>Ordena</span>
        </div>

        <nav>
          <button
            className={activePage === "dashboard" ? "active" : ""}
            onClick={() => setActivePage("dashboard")}
          >
            <Icon name="dashboard" />

            <span>Dashboard</span>
          </button>

          <button
            className={activePage === "tasklist" ? "active" : ""}
            onClick={() => setActivePage("tasklist")}
          >
            <Icon name="list_alt" />

            <span>Tarefas</span>
          </button>

          <button
            className={activePage === "projects" ? "active" : ""}
            onClick={() => setActivePage("projects")}
          >
            <Icon name="view_kanban" />

            <span>Projetos</span>
          </button>

          <button
            className={activePage === "notepad" ? "active" : ""}
            onClick={() => setActivePage("notepad")}
          >
            <Icon name="note_stack" />

            <span>Notas</span>
          </button>
        </nav>

        <button
          className={activePage === "settings" ? "active" : ""}
          onClick={() => setActivePage("settings")}
        >
          <Icon name="settings" />

          <span>Configurações</span>
        </button>
      </aside>

      <main>
        <header>
          <span>{title}</span>

          <nav>
            <button>
              <Icon name="calendar_month" />
            </button>

            <button>
              <Icon name="timer" />
            </button>

            <button>
              <Icon name="note_stack_add" />
            </button>

            <button>
              <Icon name="notifications" />
            </button>
          </nav>
        </header>

        <section>
          <CurrentPage />
        </section>
      </main>
    </div>
  );
}
