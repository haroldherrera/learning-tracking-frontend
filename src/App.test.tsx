import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('Render Testing', () => {
  it('Renders corectly', () => {
    render(<App />);

    const buttonCount = screen.getByRole('button', { name: /^count/i });

    expect(buttonCount).toBeDefined();

    fireEvent.click(buttonCount);
    expect(buttonCount.textContent).toContain('count is 1');

    fireEvent.click(buttonCount);
    expect(buttonCount).toHaveTextContent('count is 2');
  });
});
