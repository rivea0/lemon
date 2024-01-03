import { getCurrentChallenges } from '../lib/utils';
import ChallengeBox from './ChallengeBox';
import type { Box } from '../lib/types';

export default async function ChallengeBoxesContainer() {
  const challenges = await getCurrentChallenges();
  return (
    <div className="flex justify-center">
      <div className="carousel gap-3 portrait:w-full px-2 max-w-full mt-4">
        {challenges &&
          challenges.map((challenge: Box) => {
            return (
              <div
                className={`carousel-item font-light text-black shadow-xl cursor-pointer 
              }`}
                key={challenge.title}
              >
                <ChallengeBox
                  title={challenge.title}
                  id_color={challenge.id_color}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
