import Link from 'next/link';
import { resolve } from 'node:path';
import { existsSync } from 'fs';
const sqlite3 = require('sqlite3').verbose();
import {
  getCurrentChallenges,
  getChallengeDatesAndStatus,
  getId,
  sortByDate,
} from '@/app/lib/utils';

import ChallengeBoxesContainer from './components/ChallengeBoxesContainer';
import TrackerGrid from './components/TrackerGrid';

export default async function Home() {
  const filepath = resolve('src', 'app', 'db', 'challenges.db');
  if (!existsSync(filepath)) {
    console.log('DB file not found.');
  }

  const db = new sqlite3.Database(filepath);
  const challenges = await getCurrentChallenges();
  const challengesValues = await Promise.all(
    challenges.map(async (c) => {
      const resultId = await getId(c.title, db);
      const id = (resultId as { id: string }).id;
      const datesAndStatus = await getChallengeDatesAndStatus(
        (resultId as { id: string }).id
      );
      const title = c.title;
      const idColor = c.id_color;

      return { id, title, idColor, datesAndStatus };
    })
  );

  // const numberOfCompletedDays = res.filter(
  //   (i) => i.status === 'completed'
  // ).length;

  return (
    <>
      <ChallengeBoxesContainer />
      <div className="flex justify-center items-center mt-24">
        <Link
          href="/add-challenge"
          className="flex gap-1 items-center text-md p-4 rounded-md border-solid border border-base-content shadow-xl hover:border-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 256 256"
            className="inline"
          >
            <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
          </svg>
          Add new challenge
        </Link>
      </div>
      <div className="flex justify-center mt-16">
        <div className="grid grid-cols-2 w-max gap-2 portrait:grid-cols-1 px-2">
          {challengesValues.map((c) => (
            <TrackerGrid
              key={c.id}
              color={c.idColor}
              datesAndStatusValues={c.datesAndStatus.sort(sortByDate)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
