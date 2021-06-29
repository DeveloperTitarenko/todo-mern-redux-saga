import React from 'react';


import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CustomizeSvg from "../../static/dashboard/Costomize";



export default function CustomizeMenu({setModalActive}) {
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <div className='tasks__customize' onClick={handleClick} style={{cursor:'pointer'}}>
        <CustomizeSvg/>
        <span>Create task</span>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{fontSize: '1.6rem'}}
      >
        <MenuItem onClick={() => {
          setModalActive(true)
          handleClose()
        }}>create task</MenuItem>

      </Menu>
    </div>
  );
}