import { resolve } from 'node:path';
import { existsSync } from 'node:fs';
const sqlite3 = require('sqlite3').verbose();

import { getId } from '../lib/utils';

const filepath = resolve('src', 'app', 'db', 'challenges.db');

export default async function updateRow(statusStr, title, dateStr) {
  if (existsSync(filepath)) {
    const db = new sqlite3.Database(filepath);
    getId(title, db).then((res) => {
      db.run(
        `UPDATE dates_entries SET status = ? WHERE challengeId = ? AND date = ?`,
        statusStr,
        res.id,
        dateStr,
        function (error) {
          if (error) {
            console.error(error.message);
          }
          console.log('Updated dates_entries');
        }
      );
    });
  } else {
    const db = new sqlite3.Database(filepath, (error) => {
      if (error) {
        return console.error(error);
      }
    });

  }
}
