import {
  getChallengeDatesAndStatus,
  getIdOfChallenge,
  getChallengeData,
} from '@/app/lib/readUtils';
import { sortByDate } from '@/app/lib/utils';
import { removeChallenge } from '@/app/lib/actions';
import ChallengeAction from '@/app/components/ChallengeAction';
import DateByDateStatus from '@/app/components/DateByDateStatus';
import TrackerGrid from '@/app/components/TrackerGrid';
import ProgressIndicators from '@/app/components/ProgressIndicators';
import RemoveButton from '@/app/components/RemoveButton';

export default async function Page({
  params,
}: {
  params: { challenge: string };
}) {
  const title = decodeURIComponent(params.challenge);
  const id = (await getIdOfChallenge(title)) as number;
  const datesAndStatus = await getChallengeDatesAndStatus(id);
  const challengeData = await getChallengeData(id);
  const today = new Date().toLocaleDateString('en-CA').split('T')[0];
  const challengeColor = challengeData.id_color;
  const startDateStr = challengeData.startDate;
  const numberOfCompletedDays =
    datesAndStatus?.filter((i) => i.status === 'completed').length || 0;
  const latestIncompleteDate =
    datesAndStatus?.sort(sortByDate).find((i) => i.status === 'not-completed')
      ?.date || startDateStr;
  const todayIsCompleted = datesAndStatus?.find(
    (i) => i.date === today && i.status === 'completed'
  );

  const result = {
    id,
    datesAndStatus,
    challengeColor,
    numberOfCompletedDays,
    latestIncompleteDate,
  };

  return result ? (
    <>
      {todayIsCompleted && (
        <div className="flex justify-center">
          <div
            role="alert"
            className="alert bg-green-300 w-max text-black text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              <h1>Today&apos;s challenge completed! &#127881;</h1>
            </span>
          </div>
        </div>
      )}

      <ChallengeAction
        challengeTitle={title}
        color={result.challengeColor}
        startDateStr={result.latestIncompleteDate}
      />
      <div className="flex flex-col justify-center items-center mt-8 gap-4 px-2">
        <TrackerGrid
          datesAndStatusValues={result.datesAndStatus.sort(sortByDate)}
          color={result.challengeColor}
        />
        <ProgressIndicators
          numberOfCompletedDays={result.numberOfCompletedDays}
          color={result.challengeColor}
        />
        <DateByDateStatus datesAndStatus={result.datesAndStatus} />
        <form action={removeChallenge} className="mt-8 mb-12">
          <RemoveButton id={id.toString()} />
        </form>
      </div>
    </>
  ) : (
    <div>No result found</div>
  );
}
