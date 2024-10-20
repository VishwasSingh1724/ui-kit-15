import React, { useState } from 'react';


const Table = ({ data, columns, sortByColumn }) => {
  const [sortCol, setSortCol] = useState(null);

  const handleSort = (col) => {
    setSortCol(col);
    if (sortByColumn) {
      sortByColumn(col);
    }
  };

  return (
    <table className="responsive-table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} onClick={() => handleSort(col)}>
              {col} {sortCol === col ? '▼' : ''}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {columns.map((col) => (
              <td key={col}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
