const axios = require('axios')

/**
 * Envía una notificación por WhatsApp usando CallMeBot.
 * La función NO lanza error si falla — solo lo registra,
 * para que la reserva igual se guarde aunque WhatsApp falle.
 */
const enviarWhatsApp = async (reserva) => {
  const { WHATSAPP_PHONE, WHATSAPP_APIKEY } = process.env

  if (!WHATSAPP_PHONE || !WHATSAPP_APIKEY) {
    console.warn('⚠️  WhatsApp no configurado — revisa .env')
    return
  }

  // ── Mensaje bonito y organizado ───────────────
  const mensaje = `
✨ *NUEVA CITA - MAGNÉTICA* ✨

👤 *Cliente:* ${reserva.nombre}
📱 *Teléfono:* ${reserva.telefono}
${reserva.email ? `📧 *Email:* ${reserva.email}\n` : ''}
💅 *Servicio:* ${reserva.servicio}
📅 *Fecha:* ${formatearFecha(reserva.fecha)}
🕐 *Hora:* ${reserva.hora}
${reserva.direccion ? `📍 *Dirección:* ${reserva.direccion}\n` : ''}
${reserva.notas ? `📝 *Notas/Alergias:* ${reserva.notas}\n` : ''}
🔮 *Estado:* ${reserva.estado.toUpperCase()}

_Reserva recibida en Magnética Nail Spa_ 🌙
`.trim()

  try {
    await axios.get('https://api.callmebot.com/whatsapp.php', {
      params: {
        phone: WHATSAPP_PHONE,
        text: mensaje,
        apikey: WHATSAPP_APIKEY,
      },
      timeout: 8000,
    })
    console.log('✅ WhatsApp enviado a', WHATSAPP_PHONE)
  } catch (error) {
    console.error('❌ Error enviando WhatsApp:', error.message)
  }
}

// Convierte "2026-04-20" → "20 de abril de 2026"
const formatearFecha = (fechaStr) => {
  const meses = [
    'enero','febrero','marzo','abril','mayo','junio',
    'julio','agosto','septiembre','octubre','noviembre','diciembre',
  ]
  const [year, month, day] = fechaStr.split('-')
  return `${parseInt(day)} de ${meses[parseInt(month) - 1]} de ${year}`
}

module.exports = { enviarWhatsApp }
