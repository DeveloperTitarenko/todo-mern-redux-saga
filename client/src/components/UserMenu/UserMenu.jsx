import React from 'react';
import {logout} from '../../redux/actions/auth.actions'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useDispatch} from "react-redux";


export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch()

  const logoutV = async () => {
    await dispatch(logout())
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MoreVertIcon fontSize='large' style={{color:  '#9592A6', cursor: 'pointer'}} onClick={handleClick}/>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{fontSize: '1.6rem'}}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={logoutV}>Logout</MenuItem>
      </Menu>
    </div>
  );
}