import Postesdb from "postes-db"
import config from "../../config"

export const findAll = async (req, res) => {
   
    const {Poste} = await Postesdb({
        dev: true,
        dbUser : "",
        dbPassword : "",
        dbHost : "localhost",
        dbPort : "27017",
        dbName : "postes"
    })
    //mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false
    //const { item, proyecto,ne, contratista, descripcion, marca, tipo_piso, direccion, lote, distrito, provincia, departamento, latitud, longitud, altura, codigo_departamento, codigo_distrito, codigo_poste: Number, codigo_final, responsable, fecha_asignacion } = req.body

    //const newPoste = new Poste({ item, proyecto,ne, contratista, descripcion, marca, tipo_piso, direccion, lote, distrito, provincia, departamento, latitud, longitud, altura, codigo_departamento, codigo_distrito, codigo_poste: Number, codigo_final, responsable, fecha_asignacion })

    //const posteSaved = await newPoste.save()

    const postes = await Poste.findAll()

    res.status(201).json(postes)
    
}