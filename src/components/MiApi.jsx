import React, { useState, useEffect } from 'react';

const MiApi = ({filteredData}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = 'https://api.victorsanmartin.com/feriados/en.json'
    fetch(url)
      .then(response => response.json())
      .then(apiData => {
        setData(apiData.data); 
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const sortedData = [...filteredData].sort((a, b) => new Date(a.date) - new Date(b.date));
  const displayData = sortedData.length > 0 ? sortedData.reverse() : data;


  console.log('el dato de Data:', data);
  console.log('el resultado de Filter Data:', filteredData);
  console.log('el resultado de Display Data:', displayData);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2  className="feriado">Días feriados:</h2>
          <ul className="list-group ">
            {displayData.map((feriado, index) => (
              <li key={index} className="list-group-item start ">
                <strong>Fecha:</strong> {feriado.date}, <strong>Título:</strong>{' '}
                {feriado.title}, <strong>Tipo:</strong> {feriado.type}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MiApi;



