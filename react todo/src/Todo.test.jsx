import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from './App';


test('renders Todo List title', () => {
    render(<TodoApp />);

    expect(screen.getByText('Todo List')).toBeInTheDocument();
});


test('input allows letters and numbers', () => {
    render(<TodoApp />);

    const input = screen.getByPlaceholderText('Task');

    fireEvent.change(input, {
        target: { value: 'Task 123' },
    });

    expect(input.value).toBe('Task 123');
});


test('shows "Required" error when submitting empty form', async () => {
    render(<TodoApp />);

    const button = screen.getByText('Add');
    fireEvent.click(button);

    expect(await screen.findByText('Required')).toBeInTheDocument();
});


test('shows error when todo text is less than 5 characters', async () => {
    render(<TodoApp />);

    const input = screen.getByPlaceholderText('Task');
    const button = screen.getByText('Add');

    fireEvent.change(input, {
        target: { value: 'abc' },
    });

    fireEvent.click(button);

    expect(
        await screen.findByText('Must be 5 characters or more')
    ).toBeInTheDocument();
});


test('adds new todo to the list when form is valid', async () => {
    render(<TodoApp />);

    const input = screen.getByPlaceholderText('Task');
    const button = screen.getByText('Add');

    fireEvent.change(input, {
        target: { value: 'Learn React' },
    });

    fireEvent.click(button);

    expect(await screen.findByText('Learn React')).toBeInTheDocument();
});
