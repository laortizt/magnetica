function Schedule() {
  return (
   <section id="Payment">
        <div className="section-header reveal">
          <span className="section-symbol">⚝</span>
          <span className="section-label">Pagos</span>
          <h2 className="section-title">Paga con QR</h2>
          <p className="section-sub">Rápido, seguro y sin contacto</p>
        </div>

        <div
          className="reveal"
          style={{ padding: "0 1.5rem 5rem", textAlign: "center" }}
        >
          <div className="qr-container">
            <div className="qr-box">
              <svg viewBox="0 0 100 100" width="150" height="150">
                <rect width="100" height="100" fill="white" />

                <rect x="5" y="5" width="25" height="25" fill="black" />
                <rect x="8" y="8" width="19" height="19" fill="white" />
                <rect x="11" y="11" width="13" height="13" fill="black" />

                <rect x="70" y="5" width="25" height="25" fill="black" />
                <rect x="73" y="8" width="19" height="19" fill="white" />
                <rect x="76" y="11" width="13" height="13" fill="black" />

                <rect x="5" y="70" width="25" height="25" fill="black" />
                <rect x="8" y="73" width="19" height="19" fill="white" />
                <rect x="11" y="76" width="13" height="13" fill="black" />

                <rect x="35" y="5" width="5" height="5" fill="black" />
                <rect x="45" y="5" width="5" height="5" fill="black" />
                <rect x="55" y="5" width="5" height="5" fill="black" />
                <rect x="35" y="15" width="5" height="5" fill="black" />
                <rect x="50" y="15" width="5" height="5" fill="black" />
                <rect x="60" y="20" width="5" height="5" fill="black" />
                <rect x="35" y="25" width="10" height="5" fill="black" />
                <rect x="5" y="35" width="5" height="5" fill="black" />
                <rect x="15" y="35" width="5" height="5" fill="black" />
                <rect x="25" y="35" width="5" height="5" fill="black" />
                <rect x="35" y="35" width="5" height="5" fill="black" />
                <rect x="45" y="35" width="5" height="5" fill="black" />
                <rect x="55" y="40" width="5" height="5" fill="black" />
                <rect x="65" y="35" width="5" height="5" fill="black" />
                <rect x="75" y="35" width="5" height="5" fill="black" />
                <rect x="90" y="35" width="5" height="5" fill="black" />
                <rect x="5" y="45" width="5" height="5" fill="black" />
                <rect x="20" y="45" width="5" height="5" fill="black" />
                <rect x="35" y="45" width="5" height="5" fill="black" />
                <rect x="50" y="45" width="10" height="5" fill="black" />
                <rect x="70" y="45" width="5" height="5" fill="black" />
                <rect x="85" y="45" width="5" height="5" fill="black" />
                <rect x="5" y="55" width="10" height="5" fill="black" />
                <rect x="25" y="55" width="5" height="5" fill="black" />
                <rect x="40" y="55" width="5" height="5" fill="black" />
                <rect x="55" y="55" width="5" height="5" fill="black" />
                <rect x="70" y="55" width="5" height="5" fill="black" />
                <rect x="80" y="55" width="15" height="5" fill="black" />
                <rect x="35" y="65" width="5" height="5" fill="black" />
                <rect x="45" y="65" width="5" height="5" fill="black" />
                <rect x="55" y="70" width="5" height="5" fill="black" />
                <rect x="65" y="65" width="5" height="5" fill="black" />
                <rect x="75" y="70" width="5" height="5" fill="black" />
                <rect x="90" y="65" width="5" height="5" fill="black" />
                <rect x="35" y="75" width="10" height="5" fill="black" />
                <rect x="55" y="80" width="5" height="5" fill="black" />
                <rect x="65" y="75" width="5" height="5" fill="black" />
                <rect x="80" y="80" width="5" height="5" fill="black" />
                <rect x="90" y="75" width="5" height="5" fill="black" />
                <rect x="35" y="85" width="5" height="5" fill="black" />
                <rect x="50" y="90" width="5" height="5" fill="black" />
                <rect x="65" y="85" width="5" height="5" fill="black" />
                <rect x="75" y="90" width="10" height="5" fill="black" />

                <circle cx="50" cy="50" r="8" fill="white" />
                <text
                  x="50"
                  y="55"
                  textAnchor="middle"
                  fontSize="12"
                  fill="#6b21a8"
                >
                  🌙
                </text>
              </svg>
            </div>

            <p
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: ".9rem",
                color: "var(--moonlight)",
                marginBottom: ".5rem",
              }}
            >
              Escanea para pagar
            </p>

            <p
              style={{
                fontStyle: "italic",
                color: "var(--stardust)",
                fontSize: ".85rem",
                marginBottom: "1rem",
              }}
            >
              @magnetica.nailspa
            </p>

            <div className="qr-methods">
              <span className="qr-method">CoDi</span>
              <span className="qr-method">Mercado Pago</span>
              <span className="qr-method">SPEI</span>
              <span className="qr-method">Efectivo</span>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Schedule;