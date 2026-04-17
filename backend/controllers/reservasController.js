const Reserva = require('../models/Reserva')
const { enviarWhatsApp } = require('../services/whatsapp')

// ── POST /api/reservas ────────────────────────────────────────
const crearReserva = async (req, res) => {
  const { nombre, telefono, email, servicio, fecha, hora, direccion, notas } = req.body

  // 1. Validación de campos obligatorios
  if (!nombre || !telefono || !servicio || !fecha || !hora) {
    return res.status(400).json({
      ok: false,
      mensaje: 'Faltan campos obligatorios: nombre, teléfono, servicio, fecha, hora.',
    })
  }

  // 2. Validar formato de fecha (YYYY-MM-DD)
  const fechaValida = /^\d{4}-\d{2}-\d{2}$/.test(fecha)
  if (!fechaValida) {
    return res.status(400).json({
      ok: false,
      mensaje: 'Formato de fecha inválido. Usa YYYY-MM-DD.',
    })
  }

  // 3. Validar que la fecha no sea en el pasado
  const hoy = new Date()
  hoy.setHours(0, 0, 0, 0)
  if (new Date(fecha) < hoy) {
    return res.status(400).json({
      ok: false,
      mensaje: 'No puedes agendar una cita en el pasado.',
    })
  }

  // 4. Evitar duplicidad: misma fecha + misma hora + mismo servicio
  const duplicada = await Reserva.findOne({ fecha, hora, servicio })
  if (duplicada) {
    return res.status(409).json({
      ok: false,
      mensaje: `Ya existe una cita de "${servicio}" el ${fecha} a las ${hora}. Elige otro horario.`,
    })
  }

  // 5. Guardar en MongoDB
  const nuevaReserva = await Reserva.create({
    nombre,
    telefono,
    email,
    servicio,
    fecha,
    hora,
    direccion,
    notas,
  })

  // 6. Notificar por WhatsApp (en paralelo, no bloquea la respuesta)
  enviarWhatsApp(nuevaReserva)

  return res.status(201).json({
    ok: true,
    mensaje: '¡Cita agendada con éxito! ✨ Nos vemos pronto.',
    reserva: nuevaReserva,
  })
}

// ── GET /api/reservas ─────────────────────────────────────────
// Lista todas las reservas (útil para el panel de admin)
const obtenerReservas = async (req, res) => {
  const reservas = await Reserva.find().sort({ fecha: 1, hora: 1 })
  res.json({ ok: true, total: reservas.length, reservas })
}

module.exports = { crearReserva, obtenerReservas }
