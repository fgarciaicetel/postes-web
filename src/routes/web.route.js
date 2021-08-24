import { Router } from "express";
const router = Router()

router.get('/postes', (req, res) => {
    res.render('postes/index', { title: "Postes"})
})

router.get('/postes/create', (req, res) => {
    res.render('postes/create', { title: "Postes"})
})

router.get('/postes/edit/:id', (req, res) => {
    const id = req.params.id
   
    res.render('postes/edit', { title: "Postes", id : id})
})

router.get('/camaras', (req, res) => {
    res.render('camaras/index', { title: "Camaras"})
})

router.get('/camaras/create', (req, res) => {
    res.render('camaras/create', { title: "Camaras"})
})

router.get('/camaras/edit/:id', (req, res) => {
    const id = req.params.id
   
    res.render('camaras/edit', { title: "Camaras", id : id})
})

module.exports = router