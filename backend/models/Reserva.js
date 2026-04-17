const mongoose = require('mongoose')

const reservaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true,
    },
    telefono: {
      type: String,
      required: [true, 'El teléfono es obligatorio'],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    servicio: {
      type: String,
      required: [true, 'El servicio es obligatorio'],
      enum: [
        'Manicura',
        'Pedicura',
        'Diseño de Cejas',
        'Extensiones de Pestañas',
        'Ritual Completo',
      ],
    },
    fecha: {
      type: String, // "2026-04-20"
      required: [true, 'La fecha es obligatoria'],
    },
    hora: {
      type: String, // "10:30"
      required: [true, 'La hora es obligatoria'],
    },
    direccion: {
      type: String,
      trim: true,
      default: '',
    },
    notas: {
      type: String,
      trim: true,
      default: '',
    },
    estado: {
      type: String,
      enum: ['pendiente', 'confirmada', 'cancelada'],
      default: 'pendiente',
    },
  },
  {
    timestamps: true, // agrega createdAt y updatedAt
  }
)

module.exports = mongoose.model('Reserva', reservaSchema)
