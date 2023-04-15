import React, { useContext } from 'react'
import { GrSearch } from 'react-icons/gr'
import MainContext from '../MainContext'


function Search() {

  const {Search, setSearch} = useContext(MainContext)

  return (
    <div className='search'>
        <div className="icon"><GrSearch /></div>
        <input onChange={(e) => setSearch(e.target.value)} placeholder='Search Brand' />
    </div>
  )
}

export default Search