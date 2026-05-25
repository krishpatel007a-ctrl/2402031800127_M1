import { useState, type FormEvent } from 'react';

export default function Todo() {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState<string[]>([]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const handleDelete = (index: number) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Todo List</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter a new todo"
                />

                <button type="submit">Add Todo</button>
            </form>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}

                        <button onClick={() => handleDelete(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
}