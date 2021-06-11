import CheckIcon from '@material-ui/icons/Check';
import './check.scss'
const Check = ({check}) => {
  return(
    <div className='check' style={{color: "white", backgroundColor: check ? '#16CB74' : 'darkgrey'}}>
      <CheckIcon fontSize={"small"}/>
    </div>
  )
}

export default Check