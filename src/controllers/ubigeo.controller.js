//import Ubigeo from "../libs/ubigeo2"
import * as Ubigeo1 from "../libs/ubigeo"

import Ubigeo from '../libs/ubigeo/peru.json'

export const departamentos = async (req, res) => {

    //const ubigeo = new Ubigeo();
    
    const ubigeo = Ubigeo;
    const departamentos = []

    ubigeo.forEach(element => {
        //console.log(element.provincia)    

        if (element.provincia == '00' && element.distrito == '00') {
            departamentos.push(element);
        }
    });
    
    return res.json(departamentos)
}

export const provincias = async (req, res) => {

    const ubigeo = Ubigeo;

    const codigo = req.params.code

    const provincies = []

    ubigeo.forEach(element => {
        
        if (element.departamento == codigo && element.distrito == '00') {
            provincies.push(element);
        }
    });

    return res.json(provincies)
}

export const distritos = async (req, res) => {

    const ubigeo = new Ubigeo();

    const name = req.params.name

    const districts = ubigeo.find({ name: name }).include('districts').data

    return res.json(districts)
}