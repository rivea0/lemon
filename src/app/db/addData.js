import { resolve } from 'node:path';
import { existsSync } from 'node:fs';
import { add30Days } from '../lib/utils';
import { getIdOfChallenge } from '../lib/readUtils';

const sqlite3 = require('sqlite3').verbose();

const filepath = resolve('src', 'app', 'db', 'challenges.db');

async function insertInto(data) {
  if (existsSync(filepath)) {
    const db = new sqlite3.Database(filepath);
    try {
      await insertRow(db, data);
    } catch (error) {
      throw new Error(error.message);
    }
  } else {
    console.error('File does not exist.');
  }
}

async function insertRow(db, data) {
  let { title, id_color, description, startDate } = data;

  // Default id_color
  if (!id_color) {
    id_color = 'yellow';
  }

  if (!description) {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO challenges(title, id_color, startDate) VALUES(?, ?, ?);`,
        title,
        id_color,
        startDate,
        async function (error) {
          if (error) {
            reject(error);
          } else {
            console.log(
              `Inserted a row to challenges with the ID: ${this.lastID}`
            );
            insertDates(title, startDate, db).then(() => resolve());
          }
        }
      );
    });
  } else {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO challenges(title, id_color, description, startDate) VALUES(?, ?, ?, ?);`,
        title,
        id_color,
        description,
        startDate,
        async function (error) {
          if (error) {
            reject(error);
          } else {
            console.log(
              `Inserted a row to challenges with the ID: ${this.lastID}`
            );
            insertDates(title, startDate, db).then(() => resolve());
          }
        }
      );
    });
  }
}

// if (description && startDate) {
//   db.run(
//     `INSERT INTO challenges(title, id_color, description, startDate) VALUES(?, ?, ?, ?);`,
//     title,
//     id_color,
//     description,
//     startDate,
//     async function (error) {
//       if (error) {
//         console.error(error.message);
//         return;
//       }
//       console.log(`Inserted a row to challenges with the ID: ${this.lastID}`);
//       await insertDates(title, startDate, db);
//     }
//   );

//   // dates.forEach((d) => {
//   //     db.run(
//   //       `INSERT INTO dates_entries(date, challengeId, status) VALUES(?, ?, ?);`,
//   //       d,
//   //       challengeId,
//   //       'not-completed',
//   //       function (error) {
//   //         if (error) {
//   //           console.error(error.message);
//   //         }
//   //         console.log(
//   //           `Inserted a row to dates_entries with the ID: ${this.lastID}`
//   //         );
//   //       }
//   //     );
//   //   });

//   // })
// } else if (description && !startDate) {
//   db.run(
//     `INSERT INTO challenges(title, id_color, description) VALUES(?, ?, ?);`,
//     title,
//     id_color,
//     description,
//     function (error) {
//       if (error) {
//         console.error(error.message);
//         return;
//       }
//       console.log(`Inserted a row to challenges with the ID: ${this.lastID}`);
//     }
//   );
// } else if (!description && startDate) {
//   db.run(
//     `INSERT INTO challenges(title, id_color, startDate) VALUES(?, ?, ?);`,
//     title,
//     id_color,
//     startDate,
//     async function (error) {
//       if (error) {
//         // console.error(error.message);
//         // return;
//         throw new Error(error.message)
//       }
//       console.log(`Inserted a row to challenges with the ID: ${this.lastID}`);
//       await insertDates(title, startDate, db);
//     }
//   );
//   // dates.forEach((d) => {
//   //   db.run(
//   //     `INSERT INTO dates_entries(date, challengeId, status) VALUES(?, ?, ?);`,
//   //     d,
//   //     challengeId,
//   //     'not-completed',
//   //     function (error) {
//   //       if (error) {
//   //         console.error(error.message);
//   //       }
//   //       console.log(
//   //         `Inserted a row to dates_entries with the ID: ${this.lastID}`
//   //       );
//   //     }
//   //   );
//   // });
//   // })
// } else {
//   db.run(
//     `INSERT INTO challenges(title, id_color) VALUES(?, ?);`,
//     title,
//     id_color,
//     function (error) {
//       if (error) {
//         console.error(error.message);
//         return;
//       }
//       console.log(`Inserted a row with the ID: ${this.lastID}`);
//     }
//   );
// }
// }

async function insertDates(title, startDate, db) {
  const dates = add30Days(startDate);

  const challengeId = await getIdOfChallenge(title);

  for (const d of dates) {
    try {
      db.run(
        `INSERT INTO dates_entries(date, challengeId, status) VALUES(?, ?, ?);`,
        d,
        challengeId,
        'not-completed',
        function (error) {
          if (error) {
            throw new Error(error.message);
          }
          console.log(
            `Inserted a row to dates_entries with the ID: ${this.lastID}`
          );
        }
      );
    } catch (error) {
      console.error(error.message);
    }
  }
}

export default insertInto;
