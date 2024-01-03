import { resolve } from 'node:path';
import { existsSync } from 'node:fs';
const sqlite3 = require('sqlite3').verbose();

const filepath = resolve('src', 'app', 'db', 'challenges.db');

export async function removeFrom(challengeId) {
  if (existsSync(filepath)) {
    const db = new sqlite3.Database(filepath);
    db.run(
      `UPDATE challenges SET deleted = 1 WHERE id = ?`,
      challengeId,
      function (error) {
        if (error) {
          console.error(error.message);
        }
        console.log(
          `Marked as deleted in challenges with the ID: ${this.lastID}`
        );
      }
    );

    db.close();
  }
}

export async function deleteFrom(challengeId) {
  if (existsSync(filepath)) {
    const db = new sqlite3.Database(filepath);
    db.run(
      `DELETE FROM challenges WHERE id = ?`,
      challengeId,
      function (error) {
        if (error) {
          console.error(error.message);
        }
        console.log(`Deleted from challenges with the ID: ${this.lastID}`);
      }
    );

    db.run(
      `DELETE FROM dates_entries WHERE challengeId = ?`,
      challengeId,
      function (error) {
        if (error) {
          console.error(error.message);
        }
        console.log(`Deleted from challenges with the ID: ${this.lastID}`);
      }
    );

    db.close();
  }
}
