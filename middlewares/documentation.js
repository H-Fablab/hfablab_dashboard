import fs from 'fs';

const documentationRoute = (req, res, next) => {

  const documentation__data = JSON.parse(fs.readFileSync('doc.json'))
  res.render('documentation', { documentation__posts: documentation__data.documentation});
}

export default documentationRoute