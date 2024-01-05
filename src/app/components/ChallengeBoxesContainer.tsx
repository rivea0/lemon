import ChallengeBox from './ChallengeBox';
import type { ChallengeObj } from '../lib/types';

export default function ChallengeBoxesContainer({
  currentChallenges,
}: {
  currentChallenges: ChallengeObj[] | null;
}) {
  return (
    <div className="flex justify-center">
      <div className="carousel gap-3 portrait:w-full px-2 max-w-full mt-4">
        {currentChallenges &&
          currentChallenges.map((challenge) => {
            return (
              <div
                className={`carousel-item font-light text-black shadow-xl cursor-pointer 
              }`}
                key={challenge.title}
              >
                <ChallengeBox
                  title={challenge.title}
                  color={challenge.id_color}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
