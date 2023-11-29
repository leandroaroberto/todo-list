import { render, screen } from '@testing-library/react';
import { EmptyTray } from './EmptyTray';

describe('EmptyTray', () => {
  it('renders EmptyTray component', () => {
    render(<EmptyTray />);
    const message = screen.queryAllByText(/não tem tarefas cadastradas/i)
    expect(message).toBeDefined();
  });
});