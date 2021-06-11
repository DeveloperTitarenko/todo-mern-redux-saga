import './user.scss'

import userImg from '../../static/LJibxMGb1hw.jpg'
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));


const User = ({width, height, sizeH2, sizeP, user}) =>{
  const classes = useStyles();
  return(
    <div className='avatar'>
      {/*<Avatar src={userImg} style={{width: width, height: height}}/>*/}
      <Avatar className={classes.orange} style={{width: width, height: height}}>{user.username}</Avatar>
      <div className='avatar__info'>
        <h2 style={{fontSize: sizeH2}}>{user}</h2>
        <p style={{fontSize: sizeP}}>Junior</p>
      </div>
    </div>
  )
}
export default User