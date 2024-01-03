import sqlite3 from 'sqlite3';
import path from 'node:path';
import fs from 'node:fs';

export async function GET(request: Request) {
  const filepath = path.resolve('./src/app/db/challenges.db');
  let db = new sqlite3.Database(filepath);

  if (fs.existsSync(filepath)) {
    const challenges = await getChallenges(db);
    if (typeof challenges === 'string') {
      return Response.json(JSON.parse(challenges));
    } else {
      return Response.json([]);
    }
  } else {
    console.log('DB does not exist.');
  }

  db.close();
}

function getChallenges(db: sqlite3.Database) {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM challenges', (err: Error, rows: []) => {
      if (err) {
        reject(err);
      } else if (rows.length) {
        resolve(JSON.stringify(rows));
      } else {
        console.log('Table is empty');
        resolve(null);
      }
    });

    db.close();
  });
}
