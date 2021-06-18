import './user.scss'

import userImg from '../../static/LJibxMGb1hw.jpg'
import Avatar from '@material-ui/core/Avatar';
import {deepOrange, deepPurple} from '@material-ui/core/colors';
import {makeStyles} from '@material-ui/core/styles';
import LoaderCircle from "../LoaderCircle/LoaderCircle";


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


const User = ({width, height, sizeH2, sizeP, userName, position, logo}) => {
  const classes = useStyles();

  return (
    !userName ?
      <LoaderCircle/>
      :
      <div className='avatar'>
        {
          logo ? <Avatar src={logo} style={{width: width, height: height}}/> :
            <Avatar className={classes.orange} style={{width: width, height: height}}>{userName[0]}</Avatar>
        }
        <div className='avatar__info'>
          <h2 style={{fontSize: sizeH2}}>{userName}</h2>
          <p style={{fontSize: sizeP}}>{position}</p>
        </div>
      </div>
  )
}
export default User