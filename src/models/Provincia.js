import { Schema, model } from "mongoose";

const provinciaSchema = new Schema({
    name: String,
    codigo : String,
    departamento_codigo : String,
    codigo_postal : String
},{
    versionKey: false
})

export default model("Provincia", provinciaSchema)