import dotenv from 'dotenv';
dotenv.config();

class NewPageController {


  async create(req, res) {
    try {
      const currentPage = `${req.protocol}://${req.get('host')}${req.originalUrl}`
        const type = req.params.type
        res.render('new-content', {type, currentPage})
    } catch (error) {
        const errorMessage = 'Something went rong';
        res.status(500).json({ message: errorMessage });
    }
  }
}

export default new NewPageController();
