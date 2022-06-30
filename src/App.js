import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import ToDo from './Components/ToDo';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<ToDo />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
