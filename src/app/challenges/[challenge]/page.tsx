import {
  getChallengeDatesAndStatus,
  getIdOfChallenge,
  getChallengeData,
} from '@/app/lib/readUtils';
import { sortByDate, spanColors, toYearMonthDay } from '@/app/lib/utils';
import { removeChallenge, changeIdColor } from '@/app/lib/actions';
import ChallengeAction from '@/app/components/ChallengeAction';
import ColorDropdown from '@/app/components/ColorDropdown';
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
  const today = toYearMonthDay(new Date().toDateString());
  const challengeColor = challengeData.id_color;
  const startDateStr = challengeData.start_date;
  const numberOfCompletedDays =
    datesAndStatus?.filter((i) => i.status === 'completed').length || 0;
  const latestIncompleteDate =
    datesAndStatus
      ?.sort(sortByDate)
      .find((i) => i.status === 'not-completed' || i.status === 'postponed')
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
        <form
          action={changeIdColor}
          className="mt-8 mb-1 flex flex-col gap-2 border border-neutral-500/50 px-24 py-4"
        >
          <h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
              className='inline mr-2 mb-1'
            >
              <path d="M232,32a8,8,0,0,0-8-8c-44.08,0-89.31,49.71-114.43,82.63A60,60,0,0,0,32,164c0,30.88-19.54,44.73-20.47,45.37A8,8,0,0,0,16,224H92a60,60,0,0,0,57.37-77.57C182.3,121.31,232,76.08,232,32ZM92,208H34.63C41.38,198.41,48,183.92,48,164a44,44,0,1,1,44,44Zm32.42-94.45q5.14-6.66,10.09-12.55A76.23,76.23,0,0,1,155,121.49q-5.9,4.94-12.55,10.09A60.54,60.54,0,0,0,124.42,113.55Zm42.7-2.68a92.57,92.57,0,0,0-22-22c31.78-34.53,55.75-45,69.9-47.91C212.17,55.12,201.65,79.09,167.12,110.87Z"></path>
            </svg>
            Change identifying color
          </h3>
          <input type="hidden" name="id" value={id} />
          <ColorDropdown title="Pick a color" />
          <input
            type="submit"
            value="Change it!"
            className={`${spanColors[challengeColor]} cursor-pointer border border-neutral-500/50 p-2 rounded-md`}
          />
        </form>
        <form action={removeChallenge} className="mt-8 mb-12">
          <RemoveButton id={id.toString()} />
        </form>
      </div>
    </>
  ) : (
    <div>No result found</div>
  );
}
