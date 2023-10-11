import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className='search-container'>
      <input 
      type='text'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className='search-input'
      placeholder='Buscar por ...' />
    </div>
  )
}

export default Search