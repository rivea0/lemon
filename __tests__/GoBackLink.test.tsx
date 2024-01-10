import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import GoBackLink from '@/app/components/GoBackLink';

it('shows what it needs to show', () => {
  render(<GoBackLink />);
  expect(screen.getByRole('link', { name: 'Back to main page' })).toBeDefined();
});
