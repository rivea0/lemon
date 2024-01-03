import { Database } from 'sqlite3';
import { ChallengeObj, DatesAndStatusObj } from './types';

export function convertDate(date: Date, language: string) {
  return date.toLocaleDateString(language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export async function getId(title: string, db: Database) {
  return new Promise((resolve, reject) => {
    db.get('SELECT id FROM challenges WHERE title = ?', title, (err, res) => {
      if (err) {
        reject(err);
      }
      if (res) {
        resolve(res);
      }
    });
  });
}

export function add30Days(startDate: string) {
  const d = new Date(startDate);
  let dates = [startDate];

  // The startDate is already in dates, so add 29 more days
  for (let i = 0; i < 29; i++) {
    let newDate = new Date(d.setDate(d.getDate() + 1));
    let dateToAdd = newDate.toISOString().split('T')[0];
    dates.push(dateToAdd);
  }

  return dates;
}

export async function getAllChallenges(): Promise<ChallengeObj[]> {
  const data = await fetch(`${process.env.URL}/api/challenges/`, {
    next: { revalidate: 0 },
  });
  const boxes = await data.json();

  return boxes;
}

export async function getCurrentChallenges() {
  const allChallenges = await getAllChallenges();
  return allChallenges.filter((c) => !c.deleted);
}

export async function getChallengeColor(id: number) {
  const challenges = await getAllChallenges();
  const challengeFound = challenges.filter((challenge: ChallengeObj) =>
    challenge.id === id ? challenge : ''
  )[0];

  return challengeFound && challengeFound.id_color;
}

export async function getChallengeDatesAndStatus(
  id: string
): Promise<DatesAndStatusObj[]> {
  const data = await fetch(`${process.env.URL}/api/dates/${id}`, {
    next: { revalidate: 0 },
  });
  const result = await data.json();

  return result;
}

export function sortByDate(a: { date: string }, b: { date: string }) {
  return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
}

// export async function getStartDate(id: string) {
//   const result = await getChallengeDatesAndStatus(id);
//   return result
//     .map((i: DatesAndStatusObj) => ({ date: i.date }))
//     .sort(sortByDate)[0].date;
// }

export const spanColors = {
  red: 'text-red-400',
  orange: 'text-orange-400',
  amber: 'text-amber-400',
  yellow: 'text-yellow-400',
  lime: 'text-lime-400',
  green: 'text-green-400',
  emerald: 'text-emerald-400',
  teal: 'text-teal-400',
  cyan: 'text-cyan-400',
  sky: 'text-sky-400',
  blue: 'text-blue-400',
  indigo: 'text-indigo-400',
  violet: 'text-violet-400',
  purple: 'text-purple-400',
  fuchsia: 'text-fuchsia-400',
  pink: 'text-pink-400',
  rose: 'text-rose-400',
};

export const fillColors = {
  red: 'fill-red-400',
  orange: 'fill-orange-400',
  amber: 'fill-amber-400',
  yellow: 'fill-yellow-400',
  lime: 'fill-lime-400',
  green: 'fill-green-400',
  emerald: 'fill-emerald-400',
  teal: 'fill-teal-400',
  cyan: 'fill-cyan-400',
  sky: 'fill-sky-400',
  blue: 'fill-blue-400',
  indigo: 'fill-indigo-400',
  violet: 'fill-violet-400',
  purple: 'fill-purple-400',
  fuchsia: 'fill-fuchsia-400',
  pink: 'fill-pink-400',
  rose: 'fill-rose-400',
};

export const gradientColors = {
  red: 'border-red-400 bg-gradient-to-r from-red-300 to-red-400',
  orange: 'border-orange-400 bg-gradient-to-r from-orange-300 to-orange-400',
  amber: 'border-amber-400 bg-gradient-to-r from-amber-300 to-amber-400',
  yellow: 'border-yellow-400 bg-gradient-to-r from-yellow-300 to-yellow-400',
  lime: 'border-lime-400 bg-gradient-to-r from-lime-300 to-lime-400',
  green: 'border-green-400 bg-gradient-to-r from-green-300 to-green-400',
  emerald:
    'border-emerald-400 bg-gradient-to-r from-emerald-300 to-emerald-400',
  teal: 'border-teal-400 bg-gradient-to-r from-teal-300 to-teal-400',
  cyan: 'border-cyan-400 bg-gradient-to-r from-cyan-300 to-cyan-400',
  sky: 'border-sky-400 bg-gradient-to-r from-sky-300 to-sky-400',
  blue: 'border-blue-400 bg-gradient-to-r from-blue-300 to-blue-400',
  indigo: 'border-indigo-400 bg-gradient-to-r from-indigo-300 to-indigo-400',
  violet: 'border-violet-400 bg-gradient-to-r from-violet-300 to-violet-400',
  purple: 'border-purple-400 bg-gradient-to-r from-purple-300 to-purple-400',
  fuchsia:
    'border-fuchsia-400 bg-gradient-to-r from-fuchsia-300 to-fuchsia-400',
  pink: 'border-pink-400 bg-gradient-to-r from-pink-300 to-pink-400',
  rose: 'border-rose-400 bg-gradient-to-r from-rose-300 to-rose-400',
};
