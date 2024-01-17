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

    createTable(db);
    console.log('Connection established.');

    db.close();
  }
}

function createTable(db) {
  db.run(
    `
  CREATE TABLE IF NOT EXISTS challenges (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL UNIQUE,
    id_color TEXT NOT NULL,
    description TEXT,
    start_date TEXT,
    deleted INT CHECK(deleted IN (0, 1)) DEFAULT 0
  );
  `,
    function (err) {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log('Successfully created table.');
    }
  );

  db.run(
    `
  CREATE TABLE IF NOT EXISTS dates_entries (
    date TEXT NOT NULL,
    challengeId INTEGER NOT NULL,
    status TEXT NOT NULL CHECK(status IN ('completed', 'not-completed', 'postponed')),
    PRIMARY KEY(date, challengeId),
    FOREIGN KEY(challengeId) REFERENCES challenges(id)
   );
  `,
    function (err) {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log('Successfully created table.');
    }
  );
}

createDbConnection();
