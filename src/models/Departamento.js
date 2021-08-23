import { Schema, model } from "mongoose";

const departamentoSchema = new Schema({
    name: String,
    codigo : String
},{
    versionKey: false
})

export default model("Departamento", departamentoSchema)