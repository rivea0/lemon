import { spanColors } from '../lib/utils';
import type { Colors } from '../lib/types';

export default function RadialProgress({
  numberOfCompletedDays,
  color,
}: {
  numberOfCompletedDays: number;
  color: Colors;
}) {
  return (
    <div
      className={`radial-progress ${spanColors[color]}`}
      style={{
        /* @ts-ignore */
        '--value': (numberOfCompletedDays / 30) * 100,
        '--size': '6rem',
      }}
      role="progressbar"
    >
      {Math.round((numberOfCompletedDays / 30) * 100)}%
    </div>
  );
}
