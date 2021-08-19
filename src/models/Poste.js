import { Schema, model } from 'mongoose'

const posteSchema = new Schema({
    item: String,
    proyecto: String,
    ne: String,
    contratista: String,
    descripcion: String,
    marca: String,
    tipo_piso: String,
    direccion: String,
    lote: String,
    distrito: String,
    provincia: String,
    departamento: String,
    latitud: String,
    longitud: String,
    altura: String,
    codigo_departamento: Number,
    codigo_distrito: Number,
    codigo_poste: Number,
    codigo_final: String,
    responsable: String,
    fecha_asignacion: String,
}, {
    timestamps : true,
    versionKey: false
})

export default model('Poste', posteSchema)