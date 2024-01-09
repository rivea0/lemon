import { DatesAndStatusObj, Status } from '../lib/types';
import { convertDate, sortByDate } from '../lib/utils';

export default async function DateByDateStatus({
  datesAndStatus,
}: {
  datesAndStatus: DatesAndStatusObj[];
}) {
  function colorForStatus(status: Status) {
    return status === 'completed'
      ? 'bg-green-400/25'
      : status === 'not-completed'
      ? 'bg-red-400/25'
      : 'bg-orange-400/25';
  }

  return (
    <table className="table-fixed w-96 text-center mt-8 portrait:w-auto">
      <thead>
        <tr>
          <th className="py-4 px-8 border">Date</th>
          <th className="py-4 px-8 border">Status</th>
        </tr>
      </thead>
      <tbody>
        {datesAndStatus.sort(sortByDate).map((i: DatesAndStatusObj) => {
          return (
            <tr key={i.date}>
              <td className="py-4 px-8 border-[.05rem]">
                {convertDate(i.date, 'en-US')}
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
