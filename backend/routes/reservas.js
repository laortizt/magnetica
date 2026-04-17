const express = require('express')
const router = express.Router()
const { crearReserva, obtenerReservas } = require('../controllers/reservasController')

// Envuelve los controladores async para capturar errores sin try/catch en cada uno
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next)

router.post('/', asyncHandler(crearReserva))
router.get('/', asyncHandler(obtenerReservas))

module.exports = router
