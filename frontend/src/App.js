import logo from './logo.svg';
import './App.css';
import CompShowFarmacia from './farmacias/ShowFarmacia';
import CompShowFarmacias from './farmacias/ShowFarmacias';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowFarmacias />}/>
          <Route path='/farmacia/:id' element={<CompShowFarmacia/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
