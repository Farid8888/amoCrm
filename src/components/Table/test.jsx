// DealTable.js
import React, { useState, useEffect } from 'react';

const DealTable = () => {
  const [deals, setDeals] = useState([]);
  const [pageSize, setPageSize] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchDeals = async () => {
    const response = await fetch('https://your-amocrm-api-endpoint'); // Замените на свой API-эндпоинт
    const data = await response.json();
    setDeals(data);
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value, 10));
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const getPageDeals = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return deals.slice(startIndex, endIndex);
  };

  return (
    <div>
      <label>
        Показывать по:
        <select value={pageSize} onChange={handlePageSizeChange}>
          <option value={2}>2</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={deals.length}>Все</option>
        </select>
      </label>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Цена</th>
            {/* Добавьте другие заголовки столбцов по необходимости */}
          </tr>
        </thead>
        <tbody>
          {getPageDeals().map((deal) => (
            <tr key={deal.id}>
              <td>{deal.id}</td>
              <td>{deal.name}</td>
              <td>{deal.price}</td>
              {/* Добавьте другие ячейки данных по необходимости */}
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        Страница: {currentPage} из {Math.ceil(deals.length / pageSize)}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Предыдущая
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(deals.length / pageSize)}
        >
          Следующая
        </button>
      </div>
    </div>
  );
};

export default DealTable;
