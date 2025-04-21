function TodoItem({ todo, onDelete, onToggle }) {
    return (
      <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-md mb-2">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="h-5 w-5"
          />
          <span className={todo.completed ? 'line-through text-gray-500' : ''}>
            {todo.title}
          </span>
        </div>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </li>
    )
  }
  
  export default TodoItem