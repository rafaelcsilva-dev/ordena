import "./WeeklySchedule.css";
import Icon from "../../../components/Icon/Icon";

export default function WeeklySchedule() {
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
            <th scope="col">Seg</th>
            <th scope="col">Ter</th>
            <th scope="col">Qua</th>
            <th scope="col">Qui</th>
            <th scope="col">Sex</th>
            <th scope="col">Sab</th>
            <th scope="col">Dom</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>08:00</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>

          <tr>
            <td>08:00</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>

          <tr>
            <td>08:00</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>

          <tr>
            <td>08:00</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>

          <tr>
            <td>08:00</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <footer>
        <span>Prioridade:</span>

        <div>
          <span
            style={{
              backgroundColor: "var(--color4)",
            }}
          ></span>
          <span>Baixa</span>
        </div>

        <div>
          <span
            style={{
              backgroundColor: "var(--color3)",
            }}
          ></span>
          <span>Média</span>
        </div>

        <div>
          <span
            style={{
              backgroundColor: "var(--color1)",
            }}
          ></span>

          <span>Alta</span>
        </div>

        <div>
          <span
            style={{
              backgroundColor: "var(--color5)",
            }}
          ></span>

          <span>Neutro</span>
        </div>
      </footer>
    </div>
  );
}
