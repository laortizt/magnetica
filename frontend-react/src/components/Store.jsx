function Store() {
  return (
     <section id="Store">
        <div className="section-header reveal">
          <span className="section-symbol">♆</span>
          <span className="section-label">Boutique Mística</span>
          <h2 className="section-title">Tienda</h2>
          <p className="section-sub">
            Productos sagrados para el cuidado de tus uñas
          </p>
        </div>

        <div className="shop-grid">
          <div className="shop-card reveal">
            <span className="shop-emoji">✨</span>
            <p className="shop-name">Gel Lunar</p>
            <p className="shop-price">$280</p>
            <a href="#" className="shop-btn">
              Agregar
            </a>
          </div>

          <div className="shop-card reveal">
            <span className="shop-emoji">🌙</span>
            <p className="shop-name">Set Zodiacal</p>
            <p className="shop-price">$450</p>
            <a href="#" className="shop-btn">
              Agregar
            </a>
          </div>

          <div className="shop-card reveal">
            <span className="shop-emoji">💜</span>
            <p className="shop-name">Aceite Místico</p>
            <p className="shop-price">$180</p>
            <a href="#" className="shop-btn">
              Agregar
            </a>
          </div>

          <div className="shop-card reveal">
            <span className="shop-emoji">🔮</span>
            <p className="shop-name">Kit Decoraciones</p>
            <p className="shop-price">$320</p>
            <a href="#" className="shop-btn">
              Agregar
            </a>
          </div>
        </div>
      </section>
  );
}

export default Store;