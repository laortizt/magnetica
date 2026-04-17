function Galery() {
  return (
   <section id="Galery">
        <div className="section-galery-header reveal">
          <span className="section-symbol">⊛</span>
          <span className="section-label">Inspiración</span>
          <h2 className="section-title">Galería & Posts</h2>
          <p className="section-sub">Arte que trasciende</p>
        </div>

        <div className="posts-grid">
          <div className="post-card reveal">
            <div className="post-img">🌸</div>
            <div className="post-body">
              <p className="post-tag">✦ Nail Art</p>
              <h4 className="post-title">Galaxia en tus manos</h4>
              <p className="post-date">12 Abril, 2026</p>
            </div>
          </div>

          <div className="post-card reveal">
            <div className="post-img">🌙</div>
            <div className="post-body">
              <p className="post-tag">✦ Tutorial</p>
              <h4 className="post-title">Cuidado de cutícula lunar</h4>
              <p className="post-date">8 Abril, 2026</p>
            </div>
          </div>

          <div className="post-card reveal">
            <div className="post-img">💜</div>
            <div className="post-body">
              <p className="post-tag">✦ Tendencias</p>
              <h4 className="post-title">Diseños zodiacales 2026</h4>
              <p className="post-date">1 Abril, 2026</p>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Galery;