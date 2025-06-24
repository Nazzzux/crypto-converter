import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders initials inside the avatar', () => {
    render(<Avatar initials="A" />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });
});
