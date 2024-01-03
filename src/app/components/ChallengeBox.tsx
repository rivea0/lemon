import Link from 'next/link';
import { gradientColors } from '../lib/utils';
import type { Box } from '../lib/types';

export default function ChallengeBox({ title, id_color }: Box) {
  return (
    <Link href={`/challenges/${encodeURIComponent(title)}/`}>
      <div
        className={`rounded-md border-solid text-lg border p-4 ${gradientColors[id_color]}`}
      >
        {title}
      </div>
    </Link>
  );
}
