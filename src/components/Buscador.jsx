import React, { useState } from 'react';

function Buscador({ onFilterChange }) {
  const [filterType, setFilterType] = useState('Todos');

  const handleChange = (event) => {
    setFilterType(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <div >
      <h2 className="feriado">¡No los dejes pasar!</h2>
      <label htmlFor="filter" className="margen">Filtrar:</label>
      <select  className='select' id="filter" value={filterType} onChange={handleChange}>
        <option value="Todos">Todos</option>
        <option value="Civil">Civil</option>
        <option value="Religioso">Religioso</option>
      </select>     
       
    </div>
  );
}

export default Buscador;

