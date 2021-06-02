import './user.scss'

import userImg from '../../static/LJibxMGb1hw.jpg'
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UserMenu from "../UserMenu/UserMenu";

const User = () =>{
  return(
    <div className='avatar'>
      <Avatar src={userImg}/>
      <div className='avatar__info'>
        <h2>Vlad</h2>
        <p>Junior</p>
      </div>
      {/*<MoreVertIcon fontSize='large' style={{color:  '#9592A6', cursor: 'pointer'}} />*/}
      <UserMenu/>
    </div>
  )
}
export default User