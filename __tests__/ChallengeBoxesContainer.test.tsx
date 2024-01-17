import { render, screen } from '@testing-library/react';
import ChallengeBoxesContainer from '@/app/components/ChallengeBoxesContainer';
import { ChallengeObj } from '@/app/lib/types';

const mockCurrentChallenges: ChallengeObj[] = [
  {
    id: 1,
    title: 'challenge1',
    id_color: 'red',
    description: null,
    start_date: '2020-01-01',
    deleted: 0,
  },
  {
    id: 2,
    title: 'challenge2',
    id_color: 'red',
    description: null,
    start_date: '2020-01-02',
    deleted: 0,
  },
];

describe('ChallengeBoxesContainer', () => {
  it('renders', () => {
    render(
      <ChallengeBoxesContainer currentChallenges={mockCurrentChallenges} />
    );
  });

  it('links to challenges', () => {
    render(
      <ChallengeBoxesContainer currentChallenges={mockCurrentChallenges} />
    );

    expect(screen.getByRole('link', { name: 'challenge1' }));
    expect(screen.getByRole('link', { name: 'challenge2' }));
  });
});
