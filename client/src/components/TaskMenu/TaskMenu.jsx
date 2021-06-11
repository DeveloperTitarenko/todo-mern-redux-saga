import React, {useEffect} from 'react';


import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useDispatch, useSelector} from "react-redux";
import {deleteTask, updateTask} from "../../redux/actions/tasks.action";



export default function TaskMenu({taskId, setModalActive, setTaskId}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks)
  const user = useSelector(state => state.auth)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const takeUp = () => {
    const task = tasks.filter(task => task._id === taskId)
    console.log(task)
    dispatch(updateTask({
      id: taskId,
      data: {...task[0], performer: user.username, takeUp: !task[0].takeUp}
    }))
    handleClose()
  }
  const finalize = () => {
    const task = tasks.filter(task => task._id === taskId)
    dispatch(updateTask({
      id: taskId,
      data: {...task[0], finished: !task[0].finished}
    }))
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
        <MenuItem onClick={() => {
          setTaskId(taskId)
          setModalActive(true)
          handleClose()
        }}>Edit</MenuItem>
        <MenuItem onClick={finalize}>Finalize</MenuItem>
        <MenuItem onClick={() => {
          handleClose()
          dispatch(deleteTask(taskId))
        }}>Delete</MenuItem>
      </Menu>
    </div>
  );
}