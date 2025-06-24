import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Link } from './Link';

describe('Link', () => {
  it('renders the link with provided children and route', () => {
    render(
      <MemoryRouter>
        <Link to="/dashboard">Go to Dashboard</Link>
      </MemoryRouter>,
    );

    const link = screen.getByRole('link', { name: /go to dashboard/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/dashboard');
  });

  it('applies active class when route matches', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Link to="/dashboard">Dashboard</Link>
      </MemoryRouter>,
    );

    const link = screen.getByText('Dashboard');
    expect(link.className).toContain('active');
  });
});
