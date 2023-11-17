import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MiApi from './components/MiApi'
import Buscador from './components/Buscador';


function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
}, []);
const fetchData = async () => {
  try {
    const response = await fetch('https://api.victorsanmartin.com/feriados/en.json');
    const result = await response.json();
    setData(result.data);
    setFilteredData(result.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const handleFilterChange = (filterType) => {
  if (filterType === 'Todos') {
    setFilteredData(data);
  } else {
    const filtered = data.filter((item) => item.type === filterType);
    setFilteredData(filtered);
  }
};

return (
  <div className="app-container">
    <h1 className="texto">Días feriados</h1>
    <Buscador onFilterChange={handleFilterChange} />
    <MiApi data={filteredData} />
  </div>
);
}

export default App;