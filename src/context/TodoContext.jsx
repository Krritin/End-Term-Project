import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)

  // Fetch todos from JSONPlaceholder
  useEffect(() => {
    setLoading(true)
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => {
        setTodos(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching todos:', error)
        setLoading(false)
      })
  }, [])

  // Add todo
  const addTodo = async (todo) => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/todos',
        { ...todo, completed: false, userId: 1 }
      )
      setTodos([response.data, ...todos])
    } catch (error) {
      console.error('Error adding todo:', error)
    }
  }

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      setTodos(todos.filter((todo) => todo.id !== id))
    } catch (error) {
      console.error('Error deleting todo:', error)
    }
  }

  // Toggle todo completion
  const toggleTodo = async (id) => {
    const todo = todos.find((t) => t.id === id)
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        ...todo,
        completed: !todo.completed,
      })
      setTodos(
        todos.map((t) =>
          t.id === id ? { ...t, completed: !t.completed } : t
        )
      )
    } catch (error) {
      console.error('Error toggling todo:', error)
    }
  }

  return (
    <TodoContext.Provider
      value={{ todos, loading, addTodo, deleteTodo, toggleTodo }}
    >
      {children}
    </TodoContext.Provider>
  )
}