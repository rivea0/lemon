import ProgressBar from './ProgressBar';
import RadialProgress from './RadialProgress';
import type { Colors } from '../lib/types';

export default function ProgressIndicators({
  numberOfCompletedDays,
  color,
}: {
  numberOfCompletedDays: number;
  color: Colors;
}) {
  return (
    <div className="flex justify-center items-center gap-32 px-4 portrait:gap-8 portrait:px-1">
      <ProgressBar value={numberOfCompletedDays} color={color} />
      <RadialProgress
        numberOfCompletedDays={numberOfCompletedDays}
        color={color}
      />
    </div>
  );
}
