import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Personaje from './components/Personaje'
import Inicio from './components/Inicio'
import Navbar from './components/navbar';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route  element={<Navbar></Navbar>}></Route>
          <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
