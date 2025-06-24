import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { IOptionBase } from 'interfaces/options';

import { Dropdown } from './Dropdown';

const options: IOptionBase[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
];

describe('Dropdown', () => {
  it('renders placeholder initially', () => {
    render(<Dropdown options={options} placeholder="Choose fruit" />);
    expect(screen.getByText('Choose fruit')).toBeInTheDocument();
  });

  it('opens dropdown on click and displays options', async () => {
    render(<Dropdown options={options} />);
    await userEvent.click(screen.getByText('Select...'));
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });

  it('selects an option and closes dropdown (uncontrolled)', async () => {
    render(<Dropdown options={options} />);
    await userEvent.click(screen.getByText('Select...'));
    await userEvent.click(screen.getByText('Banana'));
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.queryByText('Apple')).not.toBeInTheDocument(); // dropdown closed
  });

  it('calls onChange with correct value', async () => {
    const handleChange = vi.fn();
    render(<Dropdown options={options} onChange={handleChange} />);
    await userEvent.click(screen.getByText('Select...'));
    await userEvent.click(screen.getByText('Apple'));
    expect(handleChange).toHaveBeenCalledWith('apple');
  });

  it('renders controlled value correctly', () => {
    render(<Dropdown options={options} value="banana" />);
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });

  it('closes dropdown when clicking outside', async () => {
    render(
      <div>
        <Dropdown options={options} />
        <button>Outside</button>
      </div>,
    );

    await userEvent.click(screen.getByText('Select...'));
    expect(screen.getByText('Apple')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Outside'));
    expect(screen.queryByText('Apple')).not.toBeInTheDocument();
  });
});
