import sqlite3 from 'sqlite3';
import path from 'node:path';
import fs from 'node:fs';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const filepath = path.resolve('src', 'app', 'db', 'challenges.db');
  let db = new sqlite3.Database(filepath);
  const id = params.id;

  if (fs.existsSync(filepath)) {
    const challenges = await getChallenge(db, Number(id));
    if (typeof challenges === 'string') {
      return Response.json(JSON.parse(challenges));
    } else {
      return Response.json([]);
    }
  } else {
    console.log('DB does not exist.');
  }

  // db.close();
}

function getChallenge(db: sqlite3.Database, id: number) {
  return new Promise((resolve, reject) => {
    db.all(
      'SELECT * FROM challenges WHERE id = ?',
      id,
      (err: Error, rows: []) => {
        if (err) {
          reject(err);
        } else if (rows.length) {
          resolve(JSON.stringify(rows));
        } else {
          console.log('Table is empty');
          resolve(null);
        }
      }
    );

    // db.close();
  });
}
