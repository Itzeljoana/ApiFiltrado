// Buscador.jsx

import React, { useState } from 'react';

const Buscador = ({ data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('type');

  const handleSearch = () => {
    const filteredData = data.filter(item => {
      return item.type.toLowerCase().includes(searchTerm.toLowerCase());
    });

    onSearch(filteredData);
  };

  return (
    <div>
      <label>
        <strong>Buscar por tipo:</strong>
      </label>
      <select onChange={e => setSearchTerm(e.target.value)}>
        <option value="Civil">Civil</option>
        <option value="Religioso">Religioso</option>
      </select>
      <button className='btn btn-primary btn-sm margenBotton' onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default Buscador;

