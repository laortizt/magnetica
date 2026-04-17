function ZodiacStrip({ setSelectedSign }) {
  return (
    <div className="zodiac-strip">
      <div className="zodiac-track">

        <button className="zodiac-item" onClick={() => setSelectedSign("aries")}>
          <span>♈</span>Aries
        </button>

        <button className="zodiac-item" onClick={() => setSelectedSign("taurus")}>
          <span>♉</span>Tauro
        </button>

        <button className="zodiac-item" onClick={() => setSelectedSign("gemini")}>
          <span>♊</span>Géminis
        </button>

        <button className="zodiac-item" onClick={() => setSelectedSign("cancer")}>
          <span>♋</span>Cáncer
        </button>

        <button className="zodiac-item" onClick={() => setSelectedSign("leo")}>
          <span>♌</span>Leo
        </button>

        <button className="zodiac-item" onClick={() => setSelectedSign("virgo")}>
          <span>♍</span>Virgo
        </button>

        <button className="zodiac-item" onClick={() => setSelectedSign("libra")}>
          <span>♎</span>Libra
        </button>

        <button className="zodiac-item" onClick={() => setSelectedSign("scorpio")}>
          <span>♏</span>Escorpio
        </button>

        <button className="zodiac-item" onClick={() => setSelectedSign("sagittarius")}>
          <span>♐</span>Sagitario
        </button>

        <button className="zodiac-item" onClick={() => setSelectedSign("capricorn")}>
          <span>♑</span>Capricornio
        </button>

        <button className="zodiac-item" onClick={() => setSelectedSign("aquarius")}>
          <span>♒</span>Acuario
        </button>

        <button className="zodiac-item" onClick={() => setSelectedSign("pisces")}>
          <span>♓</span>Piscis
        </button>
        

      </div>
    </div>
  );
}

export default ZodiacStrip;