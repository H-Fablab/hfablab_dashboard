import fs from 'fs'

const eventRoute = (req, res, next) => {

  const event__data = JSON.parse(fs.readFileSync('eventData.json'));
  event__data.event__files = event__data.event__files.map(fileName => `events/${fileName}`)
  res.render('agenda', {event__files: event__data.event__files });
}

export default eventRoute

