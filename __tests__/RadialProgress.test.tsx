import { render, screen } from '@testing-library/react';
import RadialProgress from '@/app/components/RadialProgress';

it('show correct value', () => {
  const mockNumberOfCompletedDays = 20;
  render(
    <RadialProgress
      numberOfCompletedDays={mockNumberOfCompletedDays}
      color="red"
    />
  );

  expect(
    screen.getByText(`${Math.round((mockNumberOfCompletedDays / 30) * 100)}%`)
  );
});

it('shows correct color', () => {
  const mockNumberOfCompletedDays = 20;
  render(
    <RadialProgress
      numberOfCompletedDays={mockNumberOfCompletedDays}
      color="red"
    />
  );

  expect(screen.getByRole('progressbar').classList).toContain('text-red-400');
});
