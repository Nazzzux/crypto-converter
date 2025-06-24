import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('renders children inside the button', () => {
    render(
      <IconButton>
        <span>🔍</span>
      </IconButton>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('🔍')).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn();
    render(
      <IconButton onClick={onClick}>
        <span>Click</span>
      </IconButton>,
    );

    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when isDisabled is true', async () => {
    const onClick = vi.fn();
    render(
      <IconButton isDisabled onClick={onClick}>
        <span>Disabled</span>
      </IconButton>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();

    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(
      <IconButton className="custom-class">
        <span>Icon</span>
      </IconButton>,
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });
});
