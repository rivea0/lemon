import { setChallengeStatus } from '../lib/actions';
import { getChallengeData, getPostponedChallenges } from '../lib/readUtils';
import { convertDate, spanColors } from '../lib/utils';
import GoBackLink from '../components/GoBackLink';

export default async function PostponedChallenges() {
  const postponedChallenges = await getPostponedChallenges();
  const postponedValues = await Promise.all(
    postponedChallenges.map(async (c) => {
      const challengeData = await getChallengeData(c.challengeId);
      return {
        id: c.challengeId,
        date: c.date,
        title: challengeData.title,
        color: challengeData.id_color,
      };
    })
  );
  const setChallengeStatusWithTitle = setChallengeStatus.bind(null, null);

  return (
    <>
      {postponedChallenges.length ? (
        <div className="flex flex-col items-center">
          <h1 className="text-xl">Postponed Challenges</h1>
          <ul className="mt-4">
            {postponedValues.map((challenge, i) => {
              return (
                // Use index as key instead if challengeId because of duplicity
                <li key={i} className="flex justify-between mb-8 gap-2">
                  <p className={`p-2 ${spanColors[challenge.color]}`}>
                    {convertDate(challenge.date, 'en-US')}: {challenge.title}
                  </p>
                  <form action={setChallengeStatusWithTitle}>
                    <button className="p-2 bg-base-200">
                      <div>
                        Mark as completed
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 inline ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </div>
                    </button>
                    <input
                      type="hidden"
                      name="status"
                      defaultValue="completed"
                    />
                    <input
                      type="hidden"
                      name="activeDate"
                      value={challenge.date}
                    />
                    <input
                      type="hidden"
                      name="challengeId"
                      value={challenge.id}
                    />
                  </form>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col items-center mt-8">
          <p>You don&apos;t have any postponed challenges! 🎉</p>
          <GoBackLink />
        </div>
      )}
    </>
  );
}
