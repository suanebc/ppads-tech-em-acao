import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className='div-search'>
      <input 
      type='text'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className='input-search'
      placeholder='Buscar por ...' />
    </div>
  )
}

export default Search