import Link from 'next/link';
import {
  getCurrentChallenges,
  getChallengeDatesAndStatus,
  getIdOfChallenge,
  getChallengeData,
} from '@/app/lib/readUtils';
import { spanColors, sortByDate, toYearMonthDay } from '@/app/lib/utils';
import ChallengeBoxesContainer from './components/ChallengeBoxesContainer';
import TrackerGrid from './components/TrackerGrid';
import type { Colors } from './lib/types';

export default async function Home() {
  const notCompletedToday: { title: string; color: Colors }[] = [];
  const currentChallenges = await getCurrentChallenges();

  // Get id, color, and datesStatus of the current challenges
  const challengesValues = currentChallenges?.length
    ? await Promise.all(
        currentChallenges.map(async (c) => {
          const id = await getIdOfChallenge(c.title);
          if (!id) {
            return null;
          }
          const datesAndStatus = await getChallengeDatesAndStatus(id);
          const challengeData = await getChallengeData(id);
          if (challengeData && datesAndStatus) {
            const color = challengeData.id_color;
            datesAndStatus.map((d) => {
              if (
                d.date === toYearMonthDay(new Date().toDateString()) &&
                d.status === 'not-completed'
              ) {
                notCompletedToday.push({ title: c.title, color: c.id_color });
              }
            });
            return { id, color, datesAndStatus };
          }
        })
      )
    : null;

  return (
    <>
      <ChallengeBoxesContainer currentChallenges={currentChallenges} />
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
      {challengesValues && (
        <div className="flex flex-col justify-center items-center mt-4 px-4">
          {notCompletedToday && (
            <div className="carousel gap-1 px-2 mt-4 portrait:w-full border border-primary border-opacity-50 rounded shadow-xl">
              <div>
                <h1 className="text-lg font-semibold p-1">
                  Today to complete:
                </h1>
              </div>
              {notCompletedToday.map((challenge) => (
                <div
                  key={challenge.title}
                  className={`carousel-item p-1 text-lg font-extrabold ${
                    spanColors[challenge.color]
                  }`}
                >
                  {challenge.title}
                </div>
              ))}
              {notCompletedToday.length === 0 && (
                <h1 className="p-1 text-lg text-green-400">
                  No challenges to complete! 🎉
                </h1>
              )}
            </div>
          )}
          <div className="grid grid-cols-2 w-max mt-8 gap-2 portrait:grid-cols-1 px-2 portrait:w-full">
            {challengesValues.map((c) => {
              return (
                c && (
                  <TrackerGrid
                    key={c.id}
                    color={c.color}
                    datesAndStatusValues={c.datesAndStatus.sort(sortByDate)}
                  />
                )
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
