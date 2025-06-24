import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { Modal } from './Modal';

vi.mock('assets/icons/CloseIcon.svg', () => ({
  ReactComponent: () => <svg data-testid="close-icon" />,
}));

beforeEach(() => {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
});

afterEach(() => {
  document.body.innerHTML = '';
  document.body.style.overflow = 'auto';
});

describe('Modal', () => {
  it('does not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        Hidden content
      </Modal>,
    );
    expect(screen.queryByText('Hidden content')).not.toBeInTheDocument();
  });

  it('renders children when isOpen is true', () => {
    render(
      <Modal isOpen onClose={() => {}}>
        Visible content
      </Modal>,
    );
    expect(screen.getByText('Visible content')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const onClose = vi.fn();
    render(
      <Modal isOpen onClose={onClose}>
        Content
      </Modal>,
    );

    await userEvent.click(screen.getByRole('button'));
    expect(onClose).toHaveBeenCalled();
  });

  it('calls onClose when clicking the backdrop', async () => {
    const onClose = vi.fn();
    render(
      <Modal isOpen onClose={onClose}>
        Content
      </Modal>,
    );

    const backdrop = screen.getByTestId('modal-backdrop');
    await userEvent.click(backdrop);

    expect(onClose).toHaveBeenCalled();
  });

  it('does not close modal when clicking inside the modal content', async () => {
    const onClose = vi.fn();
    render(
      <Modal isOpen onClose={onClose}>
        Do not close
      </Modal>,
    );

    await userEvent.click(screen.getByText('Do not close'));
    expect(onClose).not.toHaveBeenCalled();
  });

  it('calls onClose when Escape key is pressed', () => {
    const onClose = vi.fn();
    render(
      <Modal isOpen onClose={onClose}>
        Escape content
      </Modal>,
    );

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });

  it('sets and restores body overflow style', () => {
    const { rerender } = render(
      <Modal isOpen onClose={() => {}}>
        Scroll test
      </Modal>,
    );
    expect(document.body.style.overflow).toBe('hidden');

    rerender(
      <Modal isOpen={false} onClose={() => {}}>
        Scroll test
      </Modal>,
    );
    expect(document.body.style.overflow).toBe('auto');
  });
});
