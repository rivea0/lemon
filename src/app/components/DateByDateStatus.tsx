import { DatesAndStatusObj, Status } from '../lib/types';
import {
  convertDate,
  getChallengeDatesAndStatus,
  sortByDate,
} from '../lib/utils';

export default async function DateByDateStatus({
  challengeId,
}: {
  challengeId: number;
}) {
  function colorForStatus(status: Status) {
    return status === 'completed'
      ? 'bg-green-400/25'
      : status === 'not-completed'
      ? 'bg-red-400/25'
      : 'bg-orange-400/25';
  }

  const result = await getChallengeDatesAndStatus(challengeId.toString());

  return (
    <table className="table-fixed w-96 text-center mt-8 portrait:w-auto">
      <thead>
        <tr>
          <th className="py-4 px-8 border">Date</th>
          <th className="py-4 px-8 border">Status</th>
        </tr>
      </thead>
      <tbody>
        {result.sort(sortByDate).map((i: DatesAndStatusObj) => {
          return (
            <tr key={i.date}>
              <td className="py-4 px-8 border-[.05rem]">
                {convertDate(new Date(i.date), 'en-US')}
              </td>
              <td
                className={`py-4 px-8 border-[.05rem] ${colorForStatus(
                  i.status
                )}`}
              >
                {i.status}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
