import fs from 'fs';

const projetsRoute = (req, res, next) => {

  const projets__data = JSON.parse(fs.readFileSync('projects.json'))
  res.render('projets', { list__projets: projets__data.projets});
}

export default projetsRoute