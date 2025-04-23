import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo, updateTodo } from '../features/todo/todoSlice';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  const handleUpdate = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText }));
      setEditId(null);
      setEditText('');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 Todo App</h1>
      <div className="flex gap-2 mb-4 rounded">
        <input
          className="border p-2 flex-1 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new todo"
        />
        <button onClick={handleAdd} className="bg-blue-500 text-black px-4 py-2 rounded">Add</button>
      </div>

      <ul>
        {[...todos].reverse().map(todo => (
          <li key={todo.id} className="flex items-center justify-between mb-2 border rounded-lg p-3 shadow-sm text-gray-500 italic font-bold">

            {editId === todo.id ? (
              <>
                <input
                  className="border p-1 mr-2 flex-1"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleUpdate(todo.id)} className="bg-green-500 text-black px-2">Save</button>
              </>
            ) : (
              <>
                <span
                  onClick={() => dispatch(toggleTodo(todo.id))}
                  className={`cursor-pointer flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}
                >
                  {todo.text}
                </span>
                <button onClick={() => {
                  setEditId(todo.id);
                  setEditText(todo.text);
                }} className="text-blue-500 mr-2">Edit</button>
                <button onClick={() => dispatch(removeTodo(todo.id))} className="text-red-500">Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
