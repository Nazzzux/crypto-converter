import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Container } from './Container';

describe('Container', () => {
  it('renders children inside a div with class "container"', () => {
    render(
      <Container>
        <p>Test content</p>
      </Container>,
    );

    const container = screen.getByText('Test content').parentElement;

    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('container');
  });
});
