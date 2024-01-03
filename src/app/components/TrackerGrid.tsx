import { fillColors } from '../lib/utils';
import { Colors, DatesAndStatusObj } from '../lib/types';

export default function TrackerGrid({
  datesAndStatusValues,
  color,
}: {
  datesAndStatusValues: DatesAndStatusObj[];
  color: Colors;
}) {
  return (
    <ul className="grid grid-cols-15 gap-0 w-fit">
      {datesAndStatusValues.map((i) => (
        <li key={i.date} className="">
          <div className="tooltip" data-tip={i.date}>
            {i.status === 'completed' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
                className={`${fillColors[color]}`}
              >
                <rect x="32" y="32" width="192" height="192" rx="16"></rect>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
                className="fill-zinc-400/25"
              >
                <rect x="32" y="32" width="192" height="192" rx="16"></rect>
              </svg>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
