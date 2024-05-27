import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditValue(todos[index]);
    };

    const handleUpdateTodo = () => {
        if (editValue.trim() !== '') {
            const updatedTodos = [...todos];
            updatedTodos[editIndex] = editValue;
            setTodos(updatedTodos);
            setEditIndex(null);
            setEditValue('');
        }
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddTodo}>Add Item</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {editIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                />
                                <button onClick={handleUpdateTodo}>Update</button>
                            </>
                        ) : (
                            <>
                                {todo}
                                <button onClick={() => handleEditClick(index)}>Edit</button>
                            </>
                        )}
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
