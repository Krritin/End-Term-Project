import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Resume Builder</h1>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'text-white hover:text-yellow-300'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'text-white hover:text-yellow-300'
              }
            >
              Explore
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/build"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'text-white hover:text-yellow-300'
              }
            >
              Build
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/preview"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'text-white hover:text-yellow-300'
              }
            >
              Preview
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;