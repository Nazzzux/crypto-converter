import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Input } from './Input';

describe('Input', () => {
  it('renders label and input', () => {
    render(<Input name="email" label="Email Address" />);
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
  });

  it('allows typing when not disabled', async () => {
    render(<Input name="username" label="Username" />);
    const input = screen.getByLabelText('Username') as HTMLInputElement;
    await userEvent.type(input, 'test_user');
    expect(input.value).toBe('test_user');
  });

  it('disables input when isDisabled is true', () => {
    render(<Input name="username" label="Username" isDisabled />);
    const input = screen.getByLabelText('Username');
    expect(input).toBeDisabled();
  });

  it('shows error message when fieldError is provided', () => {
    render(<Input name="password" label="Password" fieldError="Required field" />);
    expect(screen.getByText('Required field')).toBeInTheDocument();
  });

  it('renders adornment when provided', () => {
    render(<Input name="search" label="Search" adornment="🔍" />);
    expect(screen.getByText('🔍')).toBeInTheDocument();
  });

  it('calls onChange handler when input changes', async () => {
    const handleChange = vi.fn();
    render(<Input name="email" label="Email" onChange={handleChange} />);
    await userEvent.type(screen.getByLabelText('Email'), 'a');
    expect(handleChange).toHaveBeenCalled();
  });
});
