import React from 'react'

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className='filter-container'>
        <div className='filter-options'>
          <h2 className='filter-options-text'>Filtrar:</h2>
          <select className='filter-options-select' value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">Todas</option>
          <option value="Completed">Completas</option>
          <option value="Incomplete">Incomplete</option>
          </select>
        </div>
      
      <div className='filter-ordering'>
        <h2>Ordem Alfabética</h2>
        <button className='filter-button' onClick={()=> setSort("Asc")}>Crescente</button>
        <button className='filter-button' onClick={()=> setSort("Desc")}>Decrescente</button>
      </div>
    </div>
  )
}

export default Filter;