import { resolve } from 'node:path';
import { Database } from 'sqlite3';
import { ChallengeObj, DatesAndStatusObj } from './types';

async function getDB(): Promise<Database> {
  const filepath = resolve('src', 'app', 'db', 'challenges.db');
  const db = new Database(filepath, (error) => {
    if (error) {
      console.error(error);
    }
  });

  return db;
}

export async function getAllChallenges(): Promise<ChallengeObj[]> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM challenges', (err: Error, rows: []) => {
      if (err) {
        reject(err);
      } else if (rows.length) {
        resolve(rows);
      } else {
        console.log('Table is empty!');
        resolve([]);
      }
    });
  });
}

// Why not use db?
export async function getIdOfChallenge(title: string) {
  const result = await fetch(`${process.env.URL}/api/challenges/`);
  const allChallenges = await result.json();
  const foundChallenge = allChallenges.find(
    (challenge: ChallengeObj) => challenge.title === title
  );
  return foundChallenge && foundChallenge.id;
}

export async function getCurrentChallenges(): Promise<ChallengeObj[]> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    db.all(
      'SELECT * FROM challenges WHERE deleted = ?',
      0,
      (err: Error, rows: []) => {
        if (err) {
          reject(err);
        } else if (rows.length) {
          resolve(rows);
        } else {
          resolve([]);
        }
      }
    );
  });
}

export async function getChallengeData(id: number): Promise<ChallengeObj> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    db.get(
      'SELECT * FROM challenges WHERE id = ?',
      id,
      (err: Error, row: ChallengeObj) => {
        if (err) {
          reject(err);
        } else if (row) {
          resolve(row);
        } else {
          throw new Error('Challenge not found');
        }
      }
    );
  });
}

export async function getChallengeDatesAndStatus(
  id: number
): Promise<DatesAndStatusObj[]> {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    db.all(
      'SELECT * FROM dates_entries WHERE challengeId = ?',
      id,
      (err: Error, rows: []) => {
        if (err) {
          reject(err);
        } else if (rows.length) {
          resolve(rows);
        } else {
          resolve([]);
        }
      }
    );
  });
}
