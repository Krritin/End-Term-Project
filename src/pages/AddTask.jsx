import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoForm from '../components/TodoForm'

function AddTask() {
  const { addTodo } = useContext(TodoContext)

  const handleSubmit = (data) => {
    addTodo(data)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
      <TodoForm onSubmit={handleSubmit} />
    </div>
  )
}

export default AddTask