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

module.exports = router