function Schedule() {
  return (
   <section id="Schedule" style={{ paddingTop: "4rem" }}>
        <div className="section-header reveal">
          <span className="section-symbol">☽</span>
          <span className="section-label">Reservaciones</span>
          <h2 className="section-title">Agenda tu Cita</h2>
          <p className="section-sub">
            El universo te espera. Elige tu momento mágico.
          </p>
        </div>

        <div className="booking-card reveal">
          <div className="form-grid">
            <div className="form-group">
              <label>✦ Nombre completo</label>
              <input type="text" placeholder="Tu nombre" />
            </div>

            <div className="form-group">
              <label>✦ Teléfono / WhatsApp</label>
              <input type="tel" placeholder="+57 000 000 0000" />
            </div>

            <div className="form-group">
              <label>✦ Correo electrónico</label>
              <input type="email" placeholder="hola@correo.com" />
            </div>

            <div className="form-group">
              <label>✦ Servicio</label>
              <select>
                <option value="">Selecciona un ritual…</option>
                <option>💅 Manicura</option>
                <option>🦶 Pedicura</option>
                <option>✨ Diseño de Cejas</option>
                <option>👁️ Extensiones de Pestañas</option>
                <option>🌌 Ritual Completo</option>
              </select>
            </div>

            <div className="form-group">
              <label>✦ Fecha</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>✦ Hora</label>
              <input type="time" />
            </div>

            <div className="form-group full">
              <label>✦ Dirección (si es a domicilio)</label>
              <input type="text" placeholder="Calle, colonia, ciudad…" />
            </div>

            <div className="form-group full">
              <label>✦ Notas · alergias · preferencias</label>
              <textarea placeholder="Cuéntanos algo sobre ti: alergias, colores favoritos, diseño soñado…"></textarea>
            </div>
          </div>

          <button className="btn-book">☽ Confirmar mi Ritual ☾</button>
        </div>
      </section>
  );
}

export default Schedule;