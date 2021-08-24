import Postesdb from "postes-db"
import config from "../../config"

export const findAll = async (req, res) => {
   
    const {Camara} = await Postesdb(config)
   
    const camaras = await Camara.findAll()

    res.status(201).json(camaras)
    
}

export const createData = async (req, res) => {
    const { Camara } = await Postesdb(config)

    const data = req.body

    const camaras = await Camara.create(data)

    res.status(201).json(camaras)
}

export const updateData = async (req, res) => {
    const { Camara } = await Postesdb(config)

    const id = req.params.camaraId
    const data = req.body

    const camaras = await Camara.update(id, data)

    res.status(201).json(camaras)
}

export const deleteData = async (req, res) => {
    const { Camara } = await Postesdb(config)

    const id = req.params.camaraId

    const camaras = await Camara.remove(id)

    res.status(201).json(camaras)
}

export const getById = async (req, res) => {
    const { Camara } = await Postesdb(config)

    const id = req.params.camaraId

    const camaras = await Camara.findById(id)

    res.status(201).json(camaras)
}