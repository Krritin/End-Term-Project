import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoItem from '../components/TodoItem'

function TodoList() {
  const { todos, loading, deleteTodo, toggleTodo } = useContext(TodoContext)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : todos.length === 0 ? (
        <p>No tasks available. Add a task to get started!</p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={deleteTodo}
              onToggle={toggleTodo}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList