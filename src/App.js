import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
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
