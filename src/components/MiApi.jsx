import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MiApi({ data }) {
  return (
    <div>
      
      <table className="table table-transparent" >
        <thead >
          <tr className="start" >
            <th  scope="col">Tipo</th>
            <th  scope="col">Fecha</th>
            <th  scope="col">Titulo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="start">{item.type}</td>
              <td >{item.date}</td>
              <td className="start">{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MiApi;



