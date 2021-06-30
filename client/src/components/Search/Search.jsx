import './search.scss'
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch} from 'react-redux'
import {tasksSearch} from "../../redux/actions/app.action";

const Search = () => {
  const dispatch = useDispatch()

  const handleSearch = (event) => {
    dispatch(tasksSearch(event.target.value))
  }
  return(
    <div className='search'>
      <SearchIcon fontSize="large" style={{color: '#5855D6'}} className='search-icone'/>
      <input type="text" placeholder='Search task' onChange={handleSearch}/>
    </div>
  )
}

export default Search