import React from "react";

const zodiacThemes = {
  aries: {
    folder: "assets/img/nails/aries",
    files: ["aries1.jpg", "aries2.jpg", "aries3.jpg", "aries4.jpg", "aries5.jpg", "aries6.jpg"],
    items: ["Diseño fuego", "Rojo energía", "Glitter warrior"]
  },
  taurus: {
    folder: "assets/img/nails/taurus",
    files: [],
    items: ["Verde esmeralda", "Nude latte", "Mármol crema"]
  },
  gemini: {
    folder: "assets/img/nails/gemini",
    files: [],
    items: ["Mitad y mitad", "Swirls dobles", "Mix & match"]
  }
};

function ZodiacModal({ selectedSign, onClose }) {
  const isOpen = !!selectedSign;
  const theme = zodiacThemes[selectedSign];

  return (
    <div
      className={`zodiac-modal ${isOpen ? "is-open" : ""}`}
      aria-hidden={!isOpen}
    >
      {/* BACKDROP */}
      <div
        className="zodiac-modal__backdrop"
        onClick={onClose}
      ></div>

      {/* DIALOG */}
      <div
        className="zodiac-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="zodiac-modal-title"
      >
        {/* CLOSE BUTTON */}
        <button
          className="zodiac-modal__close"
          type="button"
          onClick={onClose}
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="zodiac-modal__header">
          <p className="zodiac-modal__eyebrow">Colección zodiacal</p>

          <h3 id="zodiac-modal-title">
            {selectedSign ? selectedSign.toUpperCase() : "Signo"}
          </h3>

          <p className="zodiac-modal__sub" id="zodiac-modal-subtitle">
            Explora diseños inspirados en tu energía.
          </p>
        </div>

        {/* GALLERY */}
        <div className="zodiac-modal__gallery">
          {theme ? (
            theme.items.map((item, index) => (
              <div key={index} className="zodiac-design">
                <div className="zodiac-design__art">
                  {theme.files[index] ? (
                    <img
                      src={`${theme.folder}/${theme.files[index]}`}
                      alt={item}
                    />
                  ) : (
                    "✦"
                  )}
                </div>

                <div className="zodiac-design__content">
                  <h4>Diseño {index + 1}</h4>
                  <p>{item}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="zodiac-modal__empty">
              Selecciona un signo para ver sus diseños ✨
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ZodiacModal;