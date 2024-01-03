'use client';

import Confetti from 'react-confetti';

export default function ConfettiShower() {
  return <Confetti numberOfPieces={150} recycle={true} gravity={0.2} />;
}
