import express from 'express'
import eventRoute from '../middlewares/event__route.js'
import blogRoute from '../middlewares/blog.js'
import documentationRoute from '../middlewares/documentation.js'
import projetsRoute from '../middlewares/projets.js'
import equipmentsRoute from '../middlewares/equipements.js'
const router = express.Router()

// Simulated database query to get partialNameFromDatabase
const partialNameFromDatabase = "SomeValueFromDatabase"

router.get('/', (req, res) => {
  res.render('index')
});

router.get('/projets', projetsRoute)

router.get('/blog', blogRoute)

router.get('/agenda', eventRoute)

router.get('/documentation', documentationRoute)

router.get('/equipements', equipmentsRoute)

router.get('/add', (req, res) => {
    res.render('add-new')
  });

export default router
