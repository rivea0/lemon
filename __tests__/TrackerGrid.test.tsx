import { render, screen } from '@testing-library/react';
import TrackerGrid from '@/app/components/TrackerGrid';
import { DatesAndStatusObj } from '@/app/lib/types';

it('shows correct coloring for status', () => {
  const mockDatesAndStatusValues: DatesAndStatusObj[] = [
    { date: '2020-01-01', challengeId: 0, status: 'completed' },
    { date: '2020-01-02', challengeId: 1, status: 'not-completed' },
    { date: '2020-01-03', challengeId: 2, status: 'postponed' },
    { date: '2020-01-04', challengeId: 3, status: 'not-completed' },
    { date: '2020-01-05', challengeId: 4, status: 'not-completed' },
    { date: '2020-01-06', challengeId: 5, status: 'not-completed' },
    { date: '2020-01-07', challengeId: 6, status: 'not-completed' },
    { date: '2020-01-08', challengeId: 7, status: 'not-completed' },
    { date: '2020-01-09', challengeId: 8, status: 'not-completed' },
    { date: '2020-01-10', challengeId: 9, status: 'not-completed' },
    { date: '2020-01-11', challengeId: 10, status: 'not-completed' },
    { date: '2020-01-12', challengeId: 11, status: 'not-completed' },
    { date: '2020-01-13', challengeId: 12, status: 'not-completed' },
    { date: '2020-01-14', challengeId: 13, status: 'not-completed' },
    { date: '2020-01-15', challengeId: 14, status: 'not-completed' },
    { date: '2020-01-16', challengeId: 15, status: 'not-completed' },
    { date: '2020-01-17', challengeId: 16, status: 'not-completed' },
    { date: '2020-01-18', challengeId: 17, status: 'not-completed' },
    { date: '2020-01-19', challengeId: 18, status: 'not-completed' },
    { date: '2020-01-20', challengeId: 19, status: 'not-completed' },
    { date: '2020-01-21', challengeId: 20, status: 'not-completed' },
    { date: '2020-01-22', challengeId: 21, status: 'not-completed' },
    { date: '2020-01-23', challengeId: 22, status: 'not-completed' },
    { date: '2020-01-24', challengeId: 23, status: 'not-completed' },
    { date: '2020-01-25', challengeId: 24, status: 'not-completed' },
    { date: '2020-01-26', challengeId: 25, status: 'not-completed' },
    { date: '2020-01-27', challengeId: 26, status: 'not-completed' },
    { date: '2020-01-28', challengeId: 27, status: 'not-completed' },
    { date: '2020-01-29', challengeId: 28, status: 'not-completed' },
    { date: '2020-01-30', challengeId: 29, status: 'not-completed' },
  ];
  render(
    <TrackerGrid datesAndStatusValues={mockDatesAndStatusValues} color="red" />
  );

  const boxes = screen.getAllByTestId('svgBox');
  const filled = boxes.filter((box) =>
    box.classList.contains('fill-red-400')
  ).length;
  const empty = boxes.filter((box) =>
    box.classList.contains('fill-zinc-400/25')
  ).length;

  expect(filled).toEqual(1);
  expect(empty).toEqual(29);
});
