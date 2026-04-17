# 🌙 Magnética — Backend API

Backend para el spa de uñas **Magnética**. Node.js + Express + MongoDB.

---

## 📁 Estructura

```
magnetica-backend/
├── server.js                  ← Entrada principal
├── .env.example               ← Variables de entorno (copia a .env)
├── models/
│   └── Reserva.js             ← Schema de MongoDB
├── controllers/
│   └── reservasController.js  ← Lógica de negocio
├── routes/
│   └── reservas.js            ← Rutas del API
└── services/
    └── whatsapp.js            ← Notificación por WhatsApp
```

---

## 🚀 Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Crear archivo de variables de entorno
cp .env.example .env
# Edita .env con tus datos

# 3. Iniciar en desarrollo (con auto-reload)
npm run dev

# 4. Iniciar en producción
npm start
```

---

## ⚙️ Variables de entorno (.env)

```env
MONGO_URI=mongodb://localhost:27017/magnetica
PORT=3000
WHATSAPP_PHONE=3058278323
WHATSAPP_APIKEY=TU_API_KEY_AQUI
```

---

## 📲 Configurar WhatsApp (CallMeBot — GRATIS)

1. Agrega este número a tus contactos de WhatsApp: **+34 644 59 79 74**
2. Envíale el mensaje exacto: `I allow callmebot to send me messages`
3. En segundos recibirás tu `apikey` por WhatsApp
4. Pega esa key en tu `.env` como `WHATSAPP_APIKEY`

---

## 🔌 Endpoints

### `POST /api/reservas`
Crea una nueva cita y envía notificación por WhatsApp.

**Body (JSON):**
```json
{
  "nombre":    "Ana García",
  "telefono":  "3001234567",
  "email":     "ana@correo.com",
  "servicio":  "Manicura",
  "fecha":     "2026-04-25",
  "hora":      "10:30",
  "direccion": "Calle 45 #12-30, Medellín",
  "notas":     "Alergia al acrílico"
}
```

**Servicios válidos:**
- `Manicura`
- `Pedicura`
- `Diseño de Cejas`
- `Extensiones de Pestañas`
- `Ritual Completo`

**Respuesta exitosa (201):**
```json
{
  "ok": true,
  "mensaje": "¡Cita agendada con éxito! ✨ Nos vemos pronto.",
  "reserva": { ...datos }
}
```

**Errores posibles:**
| Código | Motivo |
|--------|--------|
| 400 | Campos obligatorios faltantes o fecha inválida |
| 409 | Ya existe una cita en esa fecha/hora/servicio |
| 500 | Error interno |

### `GET /api/reservas`
Lista todas las citas ordenadas por fecha y hora.

---

## 🧪 Probar con curl

```bash
curl -X POST http://localhost:3000/api/reservas \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Ana García",
    "telefono": "3001234567",
    "servicio": "Manicura",
    "fecha": "2026-04-25",
    "hora": "10:30"
  }'
```

---

## 🌐 Conectar con el formulario HTML

En tu `magnetica.html`, agrega este script al botón de reservar:

```javascript
document.querySelector('.btn-book').addEventListener('click', async () => {
  const body = {
    nombre:    document.querySelector('input[placeholder="Tu nombre"]').value,
    telefono:  document.querySelector('input[type="tel"]').value,
    email:     document.querySelector('input[type="email"]').value,
    servicio:  document.querySelector('select').value.replace(/^.+ /, ''), // quita el emoji
    fecha:     document.querySelector('input[type="date"]').value,
    hora:      document.querySelector('input[type="time"]').value,
    direccion: document.querySelectorAll('input[type="text"]')[2]?.value,
    notas:     document.querySelector('textarea').value,
  }

  const res = await fetch('http://localhost:3000/api/reservas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  const data = await res.json()
  alert(data.mensaje)
})
```
