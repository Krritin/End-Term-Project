import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Todo App</h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'underline font-semibold' : 'hover:underline'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todos"
              className={({ isActive }) =>
                isActive ? 'underline font-semibold' : 'hover:underline'
              }
            >
              Todo List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-task"
              className={({ isActive }) =>
                isActive ? 'underline font-semibold' : 'hover:underline'
              }
            >
              Add Task
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'underline font-semibold' : 'hover:underline'
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header