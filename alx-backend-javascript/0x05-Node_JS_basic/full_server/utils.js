const fs = require('fs').promises;
/**
 *
 */

const readDatabase = async (path) => {
  try {
    // Read the file asynchronously
    const data = await fs.readFile(path, 'utf8');
    // Split the data into lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    // Remove the header
    const header = lines.shift();
    if (!header) {
      return 'Number of students: 0';
    }
    const students = {};
    // Process each line
    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      if (firstname && lastname && age && field) {
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname.trim());
      }
    });
    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = readDatabase;
