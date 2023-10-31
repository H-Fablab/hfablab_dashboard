import express from 'express' 
import NewPagesController from '../views/controllers/NewPages.controller'
const router = express.Router()

router.route('/create/:type').get(NewPagesController.create)

export default router