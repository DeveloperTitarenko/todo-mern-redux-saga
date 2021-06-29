import './search.scss'


import SearchIcon from '@material-ui/icons/Search';
import {useState} from "react";
import {useDispatch} from 'react-redux'
import {tasksSearch} from "../../redux/actions/app.action";

const Search = () => {
  const dispatch = useDispatch()

  const handleSearch = (event) => {
    dispatch(tasksSearch(event.target.value))
  }
  return(
    <div className='search'>
      <SearchIcon fontSize="large" style={{color: '#5855D6', fontSize: 30}}/>
      <input type="text" placeholder='Search course, student or instructor' onChange={handleSearch}/>
    </div>
  )
}

export default Search