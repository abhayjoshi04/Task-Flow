import { useEffect } from 'react';
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './features/todo/todoSlice';


function App() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos)

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      todos.forEach(todo => dispatch(addTodo(todo.text)))
    }
  }, [dispatch])

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 to-blue-900 text-gray-100 p-4">
      <h1 className="text-5xl font-extrabold mb-8 text-white">TaskFlow</h1>
      <div className="w-full max-w-lg bg-gray-800 shadow-lg rounded-lg p-6">
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App
