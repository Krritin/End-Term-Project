import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import TodoList from './pages/TodoList'
import AddTask from './pages/AddTask'
import About from './pages/About'
import { TodoProvider } from './context/TodoContext'

function App() {
  return (
    <TodoProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<TodoList />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </TodoProvider>
  )
}

export default App