import { render, screen } from '@testing-library/react';
import InspirationList from '@/app/components/InspirationList';

describe('InspirationList', () => {
  const mockWorkouts = [
    {
      name: 'push-ups',
      link: 'https://darebee.com/challenges/knee-pushups-challenge.html',
    },
  ];

  it('shows link', () => {
    render(<InspirationList workouts={mockWorkouts} />);

    expect(screen.getByRole('link', { name: 'push-ups' })).toBeDefined();
  });

  it('shows title and paragraph', () => {
    render(
      <InspirationList
        title="Push-ups"
        paragraph="Test paragraph."
        workouts={mockWorkouts}
      />
    );

    expect(
      screen.getByRole('heading', { level: 2, name: 'Push-ups' })
    ).toBeDefined();
    expect(screen.getByText('Test paragraph.'));
  });
});
