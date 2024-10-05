import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [editingId, setEditingId] = useState(null)
  const [newText, setNewText] = useState('')

  const handleEdit = (id, currentText) => {
    setEditingId(id)
    setNewText(currentText)
  }

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: newText }))
    setEditingId(null)
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-10">
        Manage Your Todos
      </h1>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 shadow-md hover:shadow-lg transition-all duration-300 px-6 py-4 rounded-lg"
            key={todo.id}
          >
            {editingId === todo.id ? (
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleUpdate(todo.id)}
                className="text-white bg-zinc-700 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-indigo-600"
              />
            ) : (
              <div className="text-lg text-white font-semibold">{todo.text}</div>
            )}

            <div className="flex space-x-3">
              {editingId === todo.id ? (
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="text-white bg-green-500 py-2 px-5 focus:outline-none hover:bg-green-600 rounded-lg transition-all duration-300"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo.id, todo.text)}
                  className="text-white bg-yellow-500 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded-lg transition-all duration-300"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 py-2 px-5 focus:outline-none hover:bg-red-600 rounded-lg transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos
