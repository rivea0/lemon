import { render, screen } from '@testing-library/react';
import ProgressBar from '@/app/components/ProgressBar';

it('shows proper color classes', () => {
  render(<ProgressBar value={5} color="red" />);
  const progressBar = screen.getByTestId('progressbar');

  expect(progressBar).toBeDefined();
  expect(progressBar.classList).toContain(
    '[&::-webkit-progress-value]:bg-gradient-to-b'
  );
  expect(progressBar.classList).toContain(
    '[&::-webkit-progress-value]:from-red-300'
  );
  expect(progressBar.classList).toContain(
    '[&::-webkit-progress-value]:to-red-400'
  );
  expect(progressBar.classList).toContain(
    '[&::-moz-progress-bar]:bg-gradient-to-b'
  );
  expect(progressBar.classList).toContain(
    '[&::-moz-progress-bar]:from-red-300'
  );
  expect(progressBar.classList).toContain('[&::-moz-progress-bar]:to-red-400');
});
