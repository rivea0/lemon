import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Drawer from '@/app/components/Drawer';

describe('Drawer', () => {
  it('shows link to completed challenges', () => {
    render(<Drawer />);

    expect(
      screen.getByRole('link', { name: 'Completed challenges' })
    ).toBeDefined();
  });

  it('shows link to removed challenges', () => {
    render(<Drawer />);

    expect(
      screen.getByRole('link', { name: 'Removed challenges' })
    ).toBeDefined();
  });

  it('shows link to export data', () => {
    render(<Drawer />);

    expect(
      screen.getByRole('link', { name: 'Export your data' })
    ).toBeDefined();
  });

  it('shows link to inspiration route', () => {
    render(<Drawer />);

    expect(screen.getByRole('link', { name: 'Inspiration' })).toBeDefined();
  });

  it('shows link to completed challenges', () => {
    render(<Drawer />);

    expect(screen.getByRole('link', { name: 'About' })).toBeDefined();
  });
});
