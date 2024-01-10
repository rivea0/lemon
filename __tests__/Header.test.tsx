import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '@/app/components/Header';

describe('Header', () => {
  afterAll(() => {
    vi.clearAllMocks();
  });
  it('shows heading', () => {
    vi.mock('next/font/google', () => ({
      Raleway: () => ({
        style: {
          fontFamily: 'mocked',
        },
      }),
    }));
    render(<Header />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Lemon' })
    ).toBeDefined();
  });
});
