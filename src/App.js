import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Sidebar';
import { Sidebar } from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Sidebar />
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
