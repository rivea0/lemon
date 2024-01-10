import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import DateAction from '@/app/components/DateAction';
import userEvent from '@testing-library/user-event';

describe('DateAction', () => {
  it('shows date string', () => {
    render(
      <DateAction dateToStart="2020-01-01" today={new Date().toDateString()} />
    );

    expect(screen.getByText('2020-01-01')).toBeDefined();
  });

  it('shifts date down on button click', async () => {
    const user = userEvent.setup();

    render(
      <DateAction dateToStart="2020-01-01" today={new Date().toDateString()} />
    );
    const shiftDownButton = screen.getByTestId('shiftDownBtn');
    await user.click(shiftDownButton);
    expect(screen.getByText('December 31, 2019')).toBeDefined();
  });

  it('shifts date up on button click', async () => {
    const user = userEvent.setup();

    render(
      <DateAction dateToStart="2020-01-01" today={new Date().toDateString()} />
    );
    const shiftUpButton = screen.getByTestId('shiftUpBtn');
    await user.click(shiftUpButton);
    expect(screen.getByText('January 2, 2020')).toBeDefined();
  });

  it("does not show today indicator when the start date is not equal to today's date", () => {
    render(<DateAction dateToStart="2020-01-01" today="2020-01-02" />);
    const todayIndicator = screen.getByText('* today');

    expect(todayIndicator.classList).toContain('invisible');
  });

  it("shows today indicator when the start date is equal to today's date", () => {
    render(<DateAction dateToStart="2020-01-01" today="2020-01-01" />);
    const todayIndicator = screen.getByText('* today');

    expect(todayIndicator.classList).toContain('visible');
  });
});
