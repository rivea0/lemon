import Link from 'next/link';
import { gradientColors } from '../lib/utils';
import type { Colors } from '../lib/types';

export default function ChallengeBox({
  title,
  color,
  description,
}: {
  title: string;
  color: Colors;
  description: string | null;
}) {
  return (
    <Link href={`/challenges/${encodeURIComponent(title)}/`}>
      <div
        className={`rounded-md border-solid text-lg border p-4 ${gradientColors[color]}`}
      >
        {title}
        {description && (
          <p className="font-extralight text-xs">{description}</p>
        )}
      </div>
    </Link>
  );
}
