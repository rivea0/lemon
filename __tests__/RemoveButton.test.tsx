import { render, screen } from '@testing-library/react';
import RemoveButton from '@/app/components/RemoveButton';

describe('RemoveButton', () => {
  it('shows delete if it is to delete', () => {
    render(<RemoveButton id="49" isToDelete />);

    expect(screen.getByText('Delete this challenge permanently')).toBeDefined();
  });

  it('shows remove if it is to remove', () => {
    render(<RemoveButton id="49" isToDelete={false} />);

    expect(screen.getByText('Remove this challenge')).toBeDefined();
  });
});
