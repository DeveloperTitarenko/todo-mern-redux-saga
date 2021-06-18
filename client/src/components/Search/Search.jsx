import './search.scss'


import SearchIcon from '@material-ui/icons/Search';
import {useState} from "react";


const Search = () => {
  const [search, setSearch] = useState()
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  return(
    <div className='search'>
      <SearchIcon fontSize="large" style={{color: '#5855D6', fontSize: 30}}/>
      <input type="text" placeholder='Search course, student or instructor' onChange={handleSearch}/>
    </div>
  )
}

export default Search