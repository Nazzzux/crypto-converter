import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Loader } from './Loader';

import styles from './Loader.module.scss';

describe('Loader', () => {
  it('renders loader with default size and accessibility attributes', () => {
    render(<Loader />);
    const loader = screen.getByLabelText('Loading');

    expect(loader).toBeInTheDocument();
    expect(loader).toHaveAttribute('role', 'progressbar');
    expect(loader).toHaveStyle({
      width: '40px',
      height: '40px',
      borderWidth: '5px',
    });
  });

  it('renders loader with custom size', () => {
    render(<Loader size={64} />);
    const loader = screen.getByLabelText('Loading');

    expect(loader).toHaveStyle({
      width: '64px',
      height: '64px',
      borderWidth: '8px',
    });
  });

  it('renders backdrop when "backdrop" prop is true', () => {
    const { container } = render(<Loader backdrop />);
    const backdrop = container.querySelector(`.${styles.backdrop}`);
    expect(backdrop).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Loader className="custom-class" />);
    const loader = screen.getByLabelText('Loading');
    expect(loader).toHaveClass('custom-class');
  });
});
