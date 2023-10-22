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
    res.render('login')
});

router.get('/dashboard', (req, res) => {
  res.render('index')
});

router.get('/projets', projetsRoute)

router.get('/blog', blogRoute)

router.get('/agenda', eventRoute)

router.get('/documentation', documentationRoute)

router.get('/equipements', equipmentsRoute)

router.get('/membres', (req, res) => {
    res.render('membres')
});
router.get('/profile', (req, res) => {
    res.render('profile')
});
router.get('/donnations', (req, res) => {
    res.render('donnations')
});
router.get('/messages', (req, res) => {
    res.render('messages')
});
router.get('/mon-compte', (req, res) => {
    res.render('mon-compte')
});
router.get('/newletters', (req, res) => {
    res.render('newletters')
});
router.get('/comptes-administrateurs', (req, res) => {
    res.render('comptes-administrateurs')
});
router.get('/inscription-ateliers', (req, res) => {
    res.render('inscription-ateliers')
});
router.get('/projets-soummis', (req, res) => {
    res.render('projets-soummis')
});
router.get('/reservations-equipements', (req, res) => {
    res.render('reservations-equipements')
});

// router.get('/new-page/:type', (req, res) => {
//     const content = req.params.type
//     const currentPage = "new-page"
//     res.render('new-page', {content, currentPage})
// });

export default router
