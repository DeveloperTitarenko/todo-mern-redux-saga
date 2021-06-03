import React from 'react';


import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';



export default function TaskMenu({setTakeUp}) {
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const takeUp = () => {
    setTakeUp((prev) => !prev)
    handleClose()
  }

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
        <MenuItem onClick={takeUp}>Take up</MenuItem>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Finalize</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </div>
  );
}