function Services() {
  return (
     <section id="servicios">
        <div className="section-header reveal">
          <span className="section-symbol">✦</span>
          <span className="section-label">Rituales de Belleza</span>
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-sub">
            Cada servicio es un ritual pensado para ti, con amor y dedicación
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card reveal">
            <div className="card-glow"></div>
            <span className="service-icon">💅</span>
            <h3 className="service-name">Manicura</h3>
            <p className="service-desc">
              Desde el cuidado clásico hasta el gel, acrílico y nail art
              personalizado para expresar tu esencia.
            </p>
            <p className="service-price">Desde $250</p>
            <span className="service-tag">🌙 A domicilio</span>
          </div>

          <div className="service-card reveal">
            <div
              className="card-glow"
              style={{ background: "var(--rose-mystic)" }}
            ></div>
            <span className="service-icon">🦶</span>
            <h3 className="service-name">Pedicura</h3>
            <p className="service-desc">
              Ritual completo de hidratación, exfoliación y embellecimiento para
              tus pies. Spa de pies incluido.
            </p>
            <p className="service-price">Desde $300</p>
            <span className="service-tag">🌙 A domicilio</span>
          </div>

          <div className="service-card reveal">
            <div className="card-glow" style={{ background: "var(--gold)" }}></div>
            <span className="service-icon">✨</span>
            <h3 className="service-name">Diseño de Cejas</h3>
            <p className="service-desc">
              Perfilado, depilación y laminado de cejas para enmarcar tu mirada
              con precisión divina.
            </p>
            <p className="service-price">Desde $180</p>
            <span className="service-tag">🌙 A domicilio</span>
          </div>

          <div className="service-card reveal">
            <div
              className="card-glow"
              style={{ background: "var(--rose-mystic)" }}
            ></div>
            <span className="service-icon">👁️</span>
            <h3 className="service-name">Pestañas</h3>
            <p className="service-desc">
              Extensiones, lifting y tinte de pestañas. Despierta cada día con
              una mirada irresistible.
            </p>
            <p className="service-price">Desde $350</p>
            <span className="service-tag">🌙 A domicilio</span>
          </div>

          <div
            className="service-card reveal"
            style={{ gridColumn: "span 2" }}
          >
            <div className="card-glow"></div>
            <span className="service-icon">🌌</span>
            <h3 className="service-name">Ritual Completo</h3>
            <p className="service-desc">
              La experiencia Magnética total: manicura + pedicura + cejas +
              pestañas. El paquete del universo entero para ti.
            </p>
            <p className="service-price">Desde $950 · Ahorra $130</p>
            <span className="service-tag">⭐ Más popular</span>
          </div>
        </div>

        {/* DOMICILIO BANNER */}
        <div
          className="domicilio-banner reveal"
          style={{ padding: "2rem 3rem" }}
        >
          <div className="domicilio-text">
            <h3>Servicio a Domicilio 🌙</h3>
            <p>
              Llevamos la magia directamente a tu hogar. Sin desplazarte, sin
              esperas — pura experiencia VIP.
            </p>
          </div>

          <div className="domicilio-icons">
            <span title="Manicura">💅</span>
            <span title="Pedicura">🦶</span>
            <span title="Cejas">✨</span>
            <span title="Pestañas">👁️</span>
          </div>

          <a href="#agendar" className="btn-primary">
            Reservar a Domicilio
          </a>
        </div>
      </section>
  );
}

export default Services;