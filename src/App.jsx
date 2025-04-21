import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Build from './pages/Build';
import ResumePreview from './pages/ResumePreview';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/build" element={<Build />} />
          <Route path="/preview" element={<ResumePreview />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;