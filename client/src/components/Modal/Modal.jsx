import React, {useState} from 'react';
import './modal.scss'
import Input from "../Input/Input";
import Button from "../Button/Button";
import ControlledOpenSelect from "../Select/Select";
import {useDispatch, useSelector} from "react-redux";
import {createTask, updateTask} from "../../redux/actions/tasks.action";

const ModalCreateTask = ({modalActive, setModalActive, taskId, setTaskId}) => {
  const user = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const [task, setTask] = useState({
    author: user.username,
    title: '',
    text: '',
    type: '',
    takeUp: false,
  })
  const changeHandler = (event) => {
    const {name, value} = event.target
    setTask((prev) => ({...prev, [name]: value}))
  }
  const createPostNew = () => {
    dispatch(createTask({...task}))
    setTask({
      author: user.username,
      type: '',
      title: '',
      text: '',
      takeUp: false,
    })
    setModalActive(false)
  }
  const editPost = () => {
    dispatch(updateTask({
      id: taskId,
      data: task
    }))
    setTask({
      author: user.username,
      type: '',
      title: '',
      text: '',
      takeUp: false,
    })
    setTaskId(null)
    setModalActive(false)
  }

  return (
    modalActive?
    <div className={modalActive ? 'modal-create active-modal' : 'modal-create'} onClick={() => {
      setTaskId(null)
      setModalActive(false)
    }}>
      <div className={modalActive ? 'modal-create__content active-modal' : 'modal-create__content'}
           onClick={e => e.stopPropagation()}>
        <ControlledOpenSelect setTask={setTask}/>
        <Input textLabel='Title' name='title' value={task.title} onChange={changeHandler}/>
        <Input textLabel='Text' name='text' value={task.text} onChange={changeHandler}/>
        <Button text={taskId ? 'Edit' : 'Create task'} onClick={taskId ? editPost :createPostNew}/>
      </div>
    </div>
      : null
  );
}
export default ModalCreateTask