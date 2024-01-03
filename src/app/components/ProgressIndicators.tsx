import { Colors } from '../lib/types';
import ProgressBar from './ProgressBar';
import RadialProgress from './RadialProgress';

export default function ProgressIndicators({
  numberOfCompletedDays,
  challengeColor,
}: {
  numberOfCompletedDays: number;
  challengeColor: Colors;
}) {
  return (
    <div className="flex justify-center items-center gap-32 px-4 portrait:gap-8 portrait:px-1">
      <ProgressBar value={numberOfCompletedDays} color={challengeColor} />
      <RadialProgress
        numberOfCompletedDays={numberOfCompletedDays}
        color={challengeColor}
      />
    </div>
  );
}
