import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DatePick from '@/app/components/DatePick';
import { toYearMonthDay } from '@/app/lib/utils';

describe('DatePick', () => {
  it("displays today's date", async () => {
    render(<DatePick />);
    const todaysDate = toYearMonthDay(new Date().toDateString());
    expect(screen.getByDisplayValue(todaysDate)).toBeDefined();
  });
});
