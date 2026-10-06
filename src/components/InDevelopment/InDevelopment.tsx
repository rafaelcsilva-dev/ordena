import Icon from "../../components/Icon/Icon";
import "./InDevelopment.css";

interface InDevelopmentProps {
  title?: string;
  description?: string;
}

export default function InDevelopment({
  title = "Área em Desenvolvimento",
  description = "Estamos construindo algo incrível aqui para você. Volte em breve!",
}: InDevelopmentProps) {
  return (
    <div className="in-development">
      <div className="in-development-content">
        <div className="icon-badge">
          <Icon name="construction" />
        </div>

        <h2>
          <span>🚧</span> {title}
        </h2>

        <p>{description}</p>
      </div>
    </div>
  );
}
