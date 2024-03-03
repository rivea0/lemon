import { render, screen } from '@testing-library/react';
import ChallengeBoxesContainer from '@/app/components/ChallengeBoxesContainer';
import { Colors, DatesAndStatusObj, OngoingChallenge } from '@/app/lib/types';

const mockChallenges: OngoingChallenge = [
  {
    id: 1,
    title: 'challenge1',
    color: 'red',
    description: null,
    datesAndStatus: [
      { date: '2023-02-03', challengeId: 1, status: 'not-completed' },
    ],
  },
  {
    id: 2,
    title: 'challenge2',
    color: 'red',
    description: null,
    datesAndStatus: [
      { date: '2023-02-02', challengeId: 2, status: 'not-completed' },
    ],
  },
];

describe('ChallengeBoxesContainer', () => {
  it('renders', () => {
    render(<ChallengeBoxesContainer challenges={mockChallenges} />);
  });

  it('links to challenges', () => {
    render(<ChallengeBoxesContainer challenges={mockChallenges} />);

    expect(screen.getByRole('link', { name: 'challenge1' }));
    expect(screen.getByRole('link', { name: 'challenge2' }));
  });
});
