import { Router } from "express";
const router = Router()

import * as posteController from '../controllers/postes.controller'

//router.get('/postes', posteController.getAll)
router.get('/postes', posteController.findAll)
//router.get('/postes/:posteId', posteController.getById)
//router.put('/postes/:posteId', posteController.updateById)
//router.delete('/postes/:posteId', posteController.delete)

export default router;