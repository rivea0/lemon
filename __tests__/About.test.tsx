import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from '@/app/about/page';

describe('About', () => {
  it('displays main heading', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'About' })
    ).toBeDefined();
  });

  it('displays all headings', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', { level: 4, name: 'Adding a challenge' })
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 4, name: 'Homepage' })
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 4, name: 'Challenge page' })
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 4, name: 'Removing a challenge' })
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 4, name: 'Completed challenges' })
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 4, name: 'Exporting your data' })
    ).toBeDefined();
    expect(
      screen.getByRole('heading', { level: 4, name: 'Inspiration' })
    ).toBeDefined();
  });
});
