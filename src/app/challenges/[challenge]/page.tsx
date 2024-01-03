import { resolve } from 'path';
import { existsSync } from 'fs';
const sqlite3 = require('sqlite3').verbose();
import {
  getChallengeColor,
  getChallengeDatesAndStatus,
  getId,
  sortByDate,
} from '@/app/lib/utils';
import { removeChallenge } from '@/app/lib/actions';
import ChallengeAction from '@/app/components/ChallengeAction';
import { Colors, DatesAndStatusObj } from '@/app/lib/types';
import DateByDateStatus from '@/app/components/DateByDateStatus';
import TrackerGrid from '@/app/components/TrackerGrid';
import ProgressIndicators from '@/app/components/ProgressIndicators';
import RemoveButton from '@/app/components/RemoveButton';

export default async function Page({
  params,
}: {
  params: { challenge: string };
}) {
  const filepath = resolve('src', 'app', 'db', 'challenges.db');
  if (!existsSync(filepath)) {
    console.log('DB file not found.');
  }

  const title = decodeURIComponent(params.challenge);
  const db = new sqlite3.Database(filepath);
  const resultId = await getId(title, db);
  const res: DatesAndStatusObj[] = await getChallengeDatesAndStatus(
    (resultId as { id: string }).id
  );
  const challengeColor: Colors = await getChallengeColor(
    (resultId as { id: number }).id
  );
  const numberOfCompletedDays = res.filter(
    (i) => i.status === 'completed'
  ).length;

  return (
    <>
      <ChallengeAction
        challengeTitle={title}
        idColor={challengeColor}
        challengeId={(resultId as { id: number }).id}
      />
      {res && (
        <div className="flex flex-col justify-center items-center mt-8 gap-4 px-2">
          <TrackerGrid
            datesAndStatusValues={res.sort(sortByDate)}
            color={challengeColor}
          />
          <ProgressIndicators
            numberOfCompletedDays={numberOfCompletedDays}
            challengeColor={challengeColor}
          />
          <DateByDateStatus challengeId={(resultId as { id: number }).id} />
          <form action={removeChallenge} className="mt-8 mb-12">
            <RemoveButton id={(resultId as { id: number }).id.toString()} />
          </form>
        </div>
      )}
      {!res && <div>No result found</div>}
    </>
  );
}
