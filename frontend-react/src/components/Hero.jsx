
function Hero() {
  return (
    <section id="hero">
        <div className="hero-glow glow-1"></div>
        <div className="hero-glow glow-2"></div>
        <div className="hero-glow glow-3"></div>
        <div className="triple-moon">✦ Servicio a Domicilio ✦</div>
        <p className="hero-eyebrow">Uñas  Cejas y Pestañas</p>
        <h1>Magnética</h1>
        <p className="hero-tagline">
          Donde el arte y lo místico se encuentran
          <br />
          en la punta de tus dedos
        </p>
        <div className="hero-divider">
          <div className="divider-line"></div>
          <span className="divider-symbol">☽ ⊛ ☾</span>
          <div className="divider-line r"></div>
        </div>
        <div className="hero-buttons">
          <a href="#agendar" className="btn-primary">
            Agendar Cita
          </a>
          <a href="#servicios" className="btn-outline">
            Ver Servicios
          </a>
        </div>
    </section>
  );
}

export default Hero;