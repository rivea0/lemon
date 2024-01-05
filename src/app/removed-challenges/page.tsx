import { getAllChallenges } from '../lib/readUtils';
import { deleteChallenge } from '../lib/actions';
import RemoveButton from '../components/RemoveButton';
import LemonadeStandSvg from '../components/LemonadeStandSvg';
import { gradientColors } from '../lib/utils';

export default async function RemovedChallenges() {
  const allChallenges = await getAllChallenges();
  const removedChallenges = allChallenges.map((c) => (c.deleted ? c : null));

  return (
    <div className="mt-8">
      <h1 className="text-xl text-center">Removed Challenges</h1>
      {!removedChallenges.every((i) => !i) ? (
        <ul className="grid grid-cols-3 mt-8 gap-4 px-16 portrait:grid-cols-1 portrait:px-4">
          {removedChallenges.map(
            (c) =>
              c && (
                <li
                  className={`border rounded-md py-4 px-8 text-center ${
                    gradientColors[c.id_color]
                  } text-black`}
                  key={c.id}
                >
                  <p className={`text-xl`}>{c.title}</p>
                  <form action={deleteChallenge} className="mt-8 text-sm">
                    <RemoveButton id={c.id.toString()} isToDelete />
                  </form>
                </li>
              )
          )}
        </ul>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-xl">You have no removed challenges.</h1>
          <h2 className="text-lg">Time for a lemonade!</h2>
          <LemonadeStandSvg />
        </div>
      )}
    </div>
  );
}
