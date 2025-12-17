import { useState } from 'react';
import FormikTodo from "../components/FormikTodo";
import "./App.css";

export default function TodoApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((prev) => [...prev, todo]);
    };

    return (
        <div className="container">
            <h2>Todo List</h2>

            <FormikTodo onAdd={addTodo} />

            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

