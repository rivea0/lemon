import { setChallengeStatus } from '../lib/actions';
import { spanColors } from '../lib/utils';
import DateActionContainer from './DateActionContainer';
import ActionButtons from './ActionButtons';
import { Colors } from '../lib/types';

export default function ChallengeAction({
  challengeTitle,
  color,
  startDateStr,
}: {
  challengeTitle: string;
  color: Colors;
  startDateStr: string | undefined;
}) {
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
        <DateActionContainer startDateStr={startDateStr} />
        <h2 className="text-center mt-8 text-lg">
          Mark this day&apos;s{' '}
          <span className={`font-bold ${spanColors[color]}`}>
            {challengeTitle}{' '}
          </span>
          as
        </h2>
        <ActionButtons />
      </form>
    </>
  );
}
