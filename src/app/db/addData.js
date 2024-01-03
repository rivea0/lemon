import { resolve } from 'node:path';
import { existsSync } from 'node:fs';
import { getId, add30Days } from '../lib/utils';

const sqlite3 = require('sqlite3').verbose();

const filepath = resolve('src', 'app', 'db', 'challenges.db');

async function insertInto(data) {
  if (existsSync(filepath)) {
    const db = new sqlite3.Database(filepath);
    await insertRow(db, data);
  } else {
    console.error('File does not exist.');
  }
}

async function insertRow(db, data) {
  let { title, id_color, description, startDate } = data;
  const dates = add30Days(startDate);
  // Default id_color
  if (!id_color) {
    id_color = 'yellow';
  }

  if (description && startDate) {
    db.run(
      `INSERT INTO challenges(title, id_color, description, startDate) VALUES(?, ?, ?, ?);`,
      title,
      id_color,
      description,
      startDate,
      function (error) {
        if (error) {
          console.error(error.message);
        }
        console.log(`Inserted a row to challenges with the ID: ${this.lastID}`);
      }
    );
    getId(title, db).then((result) => {
      dates.forEach((d) => {
        db.run(
          `INSERT INTO dates_entries(date, challengeId, status) VALUES(?, ?, ?);`,
          d,
          result.id,
          'not-completed',
          function (error) {
            if (error) {
              console.error(error.message);
            }
            console.log(
              `Inserted a row to dates_entries with the ID: ${this.lastID}`
            );
          }
        );
      });
    });
  } else if (description && !startDate) {
    db.run(
      `INSERT INTO challenges(title, id_color, description) VALUES(?, ?, ?);`,
      title,
      id_color,
      description,
      function (error) {
        if (error) {
          console.error(error.message);
        }
        console.log(`Inserted a row to challenges with the ID: ${this.lastID}`);
      }
    );
  } else if (!description && startDate) {
    db.run(
      `INSERT INTO challenges(title, id_color, startDate) VALUES(?, ?, ?);`,
      title,
      id_color,
      startDate,
      function (error) {
        if (error) {
          console.error(error.message);
        }
        console.log(`Inserted a row to challenges with the ID: ${this.lastID}`);
      }
    );
    getId(title, db).then((result) => {
      dates.forEach((d) => {
        db.run(
          `INSERT INTO dates_entries(date, challengeId, status) VALUES(?, ?, ?);`,
          d,
          result.id,
          'not-completed',
          function (error) {
            if (error) {
              console.error(error.message);
            }
            console.log(
              `Inserted a row to dates_entries with the ID: ${this.lastID}`
            );
          }
        );
      });
    });
  } else {
    db.run(
      `INSERT INTO challenges(title, id_color) VALUES(?, ?);`,
      title,
      id_color,
      function (error) {
        if (error) {
          console.error(error.message);
        }
        console.log(`Inserted a row with the ID: ${this.lastID}`);
      }
    );
  }
}

export default insertInto;
