import { convertDate, gradientColors } from '../lib/utils';
import { getAllChallenges, getChallengeDatesAndStatus } from '../lib/readUtils';
import { deleteChallenge } from '../lib/actions';
import ConfettiShower from '../components/ConfettiShower';
import GoBackLink from '../components/GoBackLink';
import RemoveButton from '../components/RemoveButton';

export default async function Page() {
  const allChallenges = await getAllChallenges();

  const result = await Promise.all(
    allChallenges.map(async (c) => {
      const datesAndStatus = await getChallengeDatesAndStatus(c.id);
      if (
        datesAndStatus.filter((i) => i.status === 'completed').length === 30
      ) {
        return c;
      }
    })
  );

  return !result.length || result.every((i) => !i) ? (
    <div className="flex flex-col items-center mt-8">
      <p>You haven&apos;t completed any challenges yet.</p>
      <GoBackLink />
    </div>
  ) : (
    <div>
      {/* If every element is defined */}
      {/* {!result.every((i) => !i) && ( */}
      <>
        <ConfettiShower />
        <ul className="grid grid-cols-3 mt-8 gap-4 px-16 portrait:grid-cols-1 portrait:px-4">
          {result.map(
            (r) =>
              r && (
                <li
                  className={`border rounded-md py-4 px-8 text-center ${
                    gradientColors[r.id_color]
                  } text-black`}
                  key={r.id}
                >
                  <p className={`text-xl`}>{r.title}</p>
                  <span>
                    Start date: {convertDate(r.start_date, 'en-US')}
                  </span>
                  <form action={deleteChallenge} className="mt-8 text-sm">
                    <RemoveButton id={r.id.toString()} isToDelete />
                  </form>
                </li>
              )
          )}
        </ul>
      </>
    </div>
  );
}
