import { Schema, model } from "mongoose";

const DistritoSchema = new Schema({
    name: String,
    codigo : String,
    departamento_codigo : String,
    provincia_codigo : String,
    codigo_postal : String
},{
    versionKey: false
})

export default model("Distrito", DistritoSchema)