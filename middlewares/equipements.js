import fs from 'fs';

const equipmentsRoute = (req, res, next) => {
  // Read the JSON data
  let equipmentsData = JSON.parse(fs.readFileSync('equipements.json'));

  // Modify each item in the array to add "equipements/" to the "file_name"
  equipmentsData = equipmentsData.map((equipment) => ({
    ...equipment,
    file__name: `equipements/${equipment.file__name}`,
  }));

  // Render the page with the modified data
  res.render('equipements', { equipmentsData });
};

export default equipmentsRoute;

