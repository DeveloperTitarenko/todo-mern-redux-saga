import './user.scss'

import userImg from '../../static/LJibxMGb1hw.jpg'
import Avatar from '@material-ui/core/Avatar';

const User = ({width, height, sizeH2, sizeP}) =>{
  return(
    <div className='avatar'>
      <Avatar src={userImg} style={{width: width, height: height}}/>
      <div className='avatar__info'>
        <h2 style={{fontSize: sizeH2}}>Vlad</h2>
        <p style={{fontSize: sizeP}}>Junior</p>
      </div>
    </div>
  )
}
export default User