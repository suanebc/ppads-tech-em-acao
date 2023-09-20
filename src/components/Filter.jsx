import React from 'react'

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className='div-filter'>
      <div className='filter'>
        <h2>Filtrar:</h2>
        <div className='filter-options'>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">Todas</option>
          <option value="Completed">Completas</option>
          <option value="Incomplete">Incomplete</option>
          </select>
        </div>
      </div>
      <div className='ordem'>
        <h2>Ordem Alfabética</h2>
        <button className='button-ordem' onClick={()=> setSort("Asc")}>Crescente</button>
        <button className='button-ordem' onClick={()=> setSort("Desc")}>Decrescente</button>
      </div>
    </div>
  )
}

export default Filter;