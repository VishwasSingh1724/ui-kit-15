import React, { useRef } from 'react';

const Table = ({ data, columns, sortByColumn }) => {
  const tableRef = useRef(null);

  const handleSort = (col) => {
    if (sortByColumn) {
      sortByColumn(col);
    }
    
    if (tableRef.current) {
      const headers = tableRef.current.querySelectorAll('th');
      headers.forEach((header) => {
        if (header.textContent.trim() === col) {
          header.classList.add('sorted');
        } else {
          header.classList.remove('sorted');
        }
      });
    }
  };

  return (
    <table ref={tableRef} className="responsive-table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col} onClick={() => handleSort(col)}>
              {col}
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
