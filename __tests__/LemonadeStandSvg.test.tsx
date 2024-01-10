import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LemonadeStandSvg from '@/app/components/LemonadeStandSvg';

it('shows attribution link', () => {
  render(<LemonadeStandSvg />);
  expect(
    screen.getByRole('link', { name: 'Shopping illustrations by Storyset' })
  ).toBeDefined();
});
