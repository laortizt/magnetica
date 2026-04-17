require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const reservasRouter = require('./routes/reservas')

const app = express()
const PORT = process.env.PORT || 3000

// ── Middlewares ───────────────────────────────────────────────
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// CORS simple (ajusta el origen cuando tengas tu dominio)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  if (req.method === 'OPTIONS') return res.sendStatus(200)
  next()
})

// ── Rutas ─────────────────────────────────────────────────────
app.use('/api/reservas', reservasRouter)

// Ruta raíz — solo para verificar que el servidor está vivo
app.get('/', (req, res) => {
  res.json({ mensaje: '✨ Magnética API funcionando 🌙' })
})

// ── Manejo global de errores ──────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Error:', err.message)

  // Error de validación de Mongoose
  if (err.name === 'ValidationError') {
    const mensajes = Object.values(err.errors).map((e) => e.message)
    return res.status(400).json({ ok: false, mensaje: mensajes.join(', ') })
  }

  res.status(500).json({ ok: false, mensaje: 'Error interno del servidor.' })
})

// ── Conexión a MongoDB y arranque ─────────────────────────────
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('🍃 MongoDB conectado')
    app.listen(PORT, () => {
      console.log(`🌙 Servidor corriendo en http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error('❌ Error conectando a MongoDB:', err.message)
    process.exit(1)
  })
