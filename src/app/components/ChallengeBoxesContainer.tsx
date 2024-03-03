import ChallengeBox from './ChallengeBox';
import type { Colors, DatesAndStatusObj } from '../lib/types';

export default function ChallengeBoxesContainer({
  challenges,
}: {
  challenges: ({
    id: any;
    title: string;
    color: Colors;
    description: string | null;
    datesAndStatus: DatesAndStatusObj[];
  } | null | undefined)[] | null;
}) {
  return (
    <div className="flex justify-center">
      <div className="carousel gap-3 portrait:w-full px-2 max-w-full mt-4">
        {challenges &&
          challenges.map((challenge) => {
            return (
              challenge && (
                <div
                  className={`carousel-item font-light text-black cursor-pointer
              }`}
                  key={challenge.title}
                >
                  <ChallengeBox
                    title={challenge.title}
                    color={challenge.color}
                    description={challenge.description}
                  />
                </div>
              )
            );
          })}
      </div>
    </div>
  );
}
