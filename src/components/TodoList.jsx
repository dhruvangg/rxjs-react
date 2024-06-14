import React, { useState, useEffect } from 'react';
import noteStore from '../store/noteStore';

const TodoList = () => {
    const [notes, setNotes] = useState(noteStore.initialState)
    useEffect(() => {
        noteStore.subscribe(setNotes)
        noteStore.init()
    }, [])

    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim()) {
            noteStore.addTodo(inputValue)
        }
    };

    const toggleTodo = (id) => noteStore.toggleTodo(id);
    const removeTodo = (id) => noteStore.removeTodo(id);
    console.log(notes);
    return (
        <div>
            <div className="p-6">
                <div className="flex mb-4">
                    <input
                        type="text"
                        className="flex-grow p-2 border border-gray-300 rounded mr-2"
                        placeholder="Add a new task..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button
                        onClick={addTodo}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add
                    </button>
                </div>
                <ul>
                    {notes.map(todo => (
                        <li
                            key={todo.id}
                            className={`flex justify-between items-center p-2 mb-2 border-b ${todo.completed ? 'line-through text-gray-400' : ''}`}
                        >
                            <span
                                className="flex-grow cursor-pointer"
                                onClick={() => toggleTodo(todo.id)}
                            >
                                {todo.text}
                            </span>
                            <button
                                onClick={() => removeTodo(todo.id)}
                                className="bg-red-500 text-white px-4 py-1 rounded"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
