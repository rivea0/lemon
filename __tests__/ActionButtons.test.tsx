import { render, screen } from '@testing-library/react';
import ActionButtons from '@/app/components/ActionButtons';

it('shows inputs', () => {
  render(<ActionButtons />);

  expect(screen.getByDisplayValue('not-completed')).toBeDefined();
  expect(screen.getByDisplayValue('completed')).toBeDefined();
  expect(screen.getByDisplayValue('postponed')).toBeDefined();
});
