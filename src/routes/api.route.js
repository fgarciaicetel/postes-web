import { Router } from "express";
const router = Router()

import * as posteController from '../controllers/postes.controller'
import * as ubigeoController from '../controllers/ubigeo.controller'
import * as camaraController from '../controllers/camaras.controller'

router.post('/postes', posteController.createData)
router.get('/postes', posteController.findAll)
router.get('/postes/:posteId', posteController.getById)
router.put('/postes/:posteId', posteController.updateData)
router.delete('/postes/:posteId', posteController.deleteData)

router.get('/departamentos', ubigeoController.departamentos)
router.get('/provincias/:code', ubigeoController.provincias)
router.get('/distritos/:dep/:prov', ubigeoController.distritos)

router.post('/camaras', camaraController.createData)
router.get('/camaras', camaraController.findAll)
router.get('/camaras/:camaraId', camaraController.getById)
router.put('/camaras/:camaraId', camaraController.updateData)
router.delete('/camaras/:camaraId', camaraController.deleteData)

export default router;