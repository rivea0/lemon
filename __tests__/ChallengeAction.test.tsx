import { render, screen } from '@testing-library/react';
import ChallengeAction from '@/app/components/ChallengeAction';

test('shows headings', async () => {
  render(
    <ChallengeAction
      challengeTitle="test"
      color="yellow"
      startDateStr="2020-01-01"
    />
  );
  expect(screen.getByRole('heading', { level: 1, name: 'January 1, 2020' }));
  expect(
    screen.getByRole('heading', { level: 2, name: "Mark this day's test as" })
  ).toBeDefined();
});
