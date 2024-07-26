
import './App.css';
import CompShowFarmacos from './components/CompShowFarmacos';
import Home from './components/Home';
import CompShowFarmacia from './components/ShowFarmacia';
import CompShowFarmacias from './components/ShowFarmacias';
import { Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Link to="/" className="App-title-link">
          <h1 className="App-title">MediPrecio</h1>
        </Link>
      </header>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/farmacias' element={<CompShowFarmacias />} />
        <Route path='/farmacia/:id' element={<CompShowFarmacia />} />
        <Route path='/buscar' element={<CompShowFarmacos />} /> {/* Ruta para el buscador */}
        </Routes>
    </div>
  );
}

export default App;
