import { setChallengeStatus } from '../lib/actions';
import { getCurrentChallenges, spanColors } from '../lib/utils';
import DateActionContainer from './DateActionContainer';
import ActionButtons from './ActionButtons';
import { Colors } from '../lib/types';

export default async function ChallengeAction({
  challengeTitle,
  idColor,
  challengeId,
}: {
  challengeTitle: string;
  idColor: Colors;
  challengeId: number;
}) {
  const challenges = await getCurrentChallenges();
  const startDate = challenges
    .map((c) => (c.id === challengeId ? c.startDate : null))
    ?.pop();

  const setChallengeStatusWithTitle = setChallengeStatus.bind(
    null,
    challengeTitle
  );

  return (
    <>
      <form
        action={setChallengeStatusWithTitle}
        className="flex flex-col justify-center"
      >
        <DateActionContainer startDateStr={startDate} />
        <h2 className="text-center mt-8 text-lg">
          Mark this day&apos;s{' '}
          <span className={`font-bold ${spanColors[idColor]}`}>
            {challengeTitle}
          </span>{' '}
          as
        </h2>
        <ActionButtons />
      </form>
    </>
  );
}
