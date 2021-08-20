import Postesdb from "postes-db"
import config from "../../config"

export const findAll = async (req, res) => {
   
    const {Poste} = await Postesdb(config)
   
    const postes = await Poste.findAll()

    res.status(201).json(postes)
    
}

export const createData = async (req, res) => {
    const { Poste } = await Postesdb(config)

    const data = req.body

    const postes = await Poste.create(data)

    res.status(201).json(postes)
}

export const updateData = async (req, res) => {
    const { Poste } = await Postesdb(config)

    const id = req.params.posteId
    const data = req.body

    const postes = await Poste.update(id, data)

    res.status(201).json(postes)
}

export const deleteData = async (req, res) => {
    const { Poste } = await Postesdb(config)

    const id = req.params.posteId

    const postes = await Poste.remove(id)

    res.status(201).json(postes)
}

export const getById = async (req, res) => {
    const { Poste } = await Postesdb(config)

    const id = req.params.posteId

    const postes = await Poste.findById(id)

    res.status(201).json(postes)
}