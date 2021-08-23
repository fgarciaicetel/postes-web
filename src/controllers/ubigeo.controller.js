import Postesdb from "postes-db"
import config from "../../config"

export const departamentos = async (req, res) => {

    //const ubigeo = new Ubigeo();
       
    const {Departamento} = await Postesdb(config)
   
    const departamentos = await Departamento.findAll()
    
    return res.json(departamentos)
}

export const provincias = async (req, res) => {

    const codigo = req.params.code

    const {Provincia} = await Postesdb(config)
   
    const provincias = await Provincia.findAll(codigo)
    
    return res.json(provincias)
}

export const distritos = async (req, res) => {

    const dep = req.params.dep
    const prov = req.params.prov
    
    const {Distrito} = await Postesdb(config)
   
    const districts = await Distrito.findAll(dep,prov)
    
    return res.json(districts)
}