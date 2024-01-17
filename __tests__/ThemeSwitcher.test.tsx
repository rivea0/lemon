import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeSwitcher from '@/app/components/ThemeSwitcher';

describe('ThemeSwitcher', () => {
  it('shows theme options on click', async () => {
    const user = userEvent.setup();

    render(<ThemeSwitcher />);
    const themeOpen = screen.getByTestId('themeOpen');

    await user.click(themeOpen);

    expect(screen.getByDisplayValue('light')).toBeDefined();
    expect(screen.getByDisplayValue('dark')).toBeDefined();
    expect(screen.getByDisplayValue('dim')).toBeDefined();
    expect(screen.getByDisplayValue('lemonade')).toBeDefined();
    expect(screen.getByDisplayValue('dracula')).toBeDefined();
    expect(screen.getByDisplayValue('synthwave')).toBeDefined();
    expect(screen.getByDisplayValue('nord')).toBeDefined();
    expect(screen.getByDisplayValue('autumn')).toBeDefined();
  });
});
