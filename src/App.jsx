import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './components/MiApi'
import Buscador from './components/Buscador';

const App = () => {
  const [filteredData, setfilteredData] = useState([]);

  const handleSearch = data => {
    setfilteredData(data);
  };

  return (
    <div >
      <h1 className='texto'>Que no se te escape ningún feriado</h1>
      <Buscador data={filteredData} onSearch={handleSearch} />
      <MiApi filteredData={filteredData} />
    </div>
  );
};

export default App;