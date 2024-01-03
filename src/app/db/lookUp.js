const path = require('node:path');
const fs = require('node:fs');
const sqlite3 = require('sqlite3').verbose();
const filepath = path.resolve('./challenges.db');

function createDbConnection() {
  if (fs.existsSync(filepath)) {
    console.log('Connected to the existing db.');
    return new sqlite3.Database(filepath);
  } else {
    const db = new sqlite3.Database(filepath, (error) => {
      if (error) {
        return console.error(error);
      }
    });
    console.log('Connection established.');

    db.close();
  }
}

function lookUpChallenges(db) {
  db.all('SELECT * FROM challenges', (error, rows) => {
    if (error) {
      throw new Error(error.message);
    }
    if (rows.length) {
      console.dir(rows, { depth: null });
    } else {
      console.log('Table is empty!');
    }
  });
}

function lookUpDatesEntries(db) {
  db.all('SELECT * FROM dates_entries', (error, rows) => {
    if (error) {
      throw new Error(error.message);
    }
    if (rows.length) {
      console.dir(rows, { depth: null });
    } else {
      console.log('Table is empty!');
    }
  });
}

const db = createDbConnection();
lookUpChallenges(db);
// lookUpDatesEntries(db)
