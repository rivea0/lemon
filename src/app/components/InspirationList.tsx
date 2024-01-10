import Link from 'next/link';

export default function InspirationList({
  title,
  paragraph,
  workouts,
}: {
  title?: string;
  paragraph?: string;
  workouts: { name: string; link: string }[];
}) {
  return (
    <div className="mt-4 self-start">
      {title && <h2 className="text-2xl">{title}</h2>}
      {paragraph && <p className="mt-2">{paragraph}</p>}
      <ul className="mt-2">
        {workouts.map((workout) => {
          return (
            <li key={workout.name}>
              <Link
                href={workout.link}
                className="text-primary hover:underline"
              >
                {workout.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
