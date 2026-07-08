import React from "react";
import "./Home.css";

export default function OrdenaLanding(): React.ReactElement {
  return (
    <div className="ordena-bg">
      {/* Brilho roxo sutil no fundo atrás do card */}
      <div className="glow-effect"></div>

      <div className="ordena-card">
        <h1 className="main-logo">ORDENA</h1>
        <h2 className="main-subtitle">APP DE PRODUTIVIDADE</h2>

        {/* Badge de Desenvolvimento */}
        <div className="dev-status-badge">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          PÁGINA EM DESENVOLVIMENTO
        </div>

        {/* Grade de Recursos/Ícones */}
        <div className="features-row">
          <div className="feature-item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>Agenda</span>
          </div>

          <div className="feature-item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>Pomodoro</span>
          </div>

          <div className="feature-item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            <span>Projetos</span>
          </div>

          <div className="feature-item">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
            <span>Notas</span>
          </div>
        </div>

        {/* Equação de Produtividade estilizada */}
        <div className="formula-text">
          P<sub>ordena</sub> = ∑ ( Foco + Organização )
        </div>
      </div>

      <p className="coming-soon-text">Em breve, sua rotina em um só lugar.</p>
    </div>
  );
}
