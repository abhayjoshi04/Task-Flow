import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (input.trim()) {
      dispatch(addTodo(input))
      setInput('')
    }
  }

  return (
    <form onSubmit={addTodoHandler} className="mt-8 flex justify-center space-x-4">
      <input
        type="text"
        className="w-full max-w-lg bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 outline-none transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-all duration-300"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
