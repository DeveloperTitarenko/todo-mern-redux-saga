import './search.scss'


import SearchIcon from '@material-ui/icons/Search';


const Search = () => {
  return(
    <div className='search'>
      <SearchIcon fontSize="large" style={{color: '#5855D6', fontSize: 30}}/>
      <input type="text" placeholder='Search course, student or instructor'/>
    </div>
  )
}

export default Search