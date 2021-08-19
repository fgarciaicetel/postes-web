import { Router } from "express";
const router = Router()

import * as posteController from '../controllers/postes.controller'

router.post('/postes', posteController.createData)
router.get('/postes', posteController.findAll)
router.get('/postes/:posteId', posteController.getById)
router.put('/postes/:posteId', posteController.updateData)
router.delete('/postes/:posteId', posteController.deleteData)

export default router;