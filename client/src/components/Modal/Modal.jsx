import React, {useState} from 'react';
import './modal.scss'
import Input from "../Input/Input";
import Button from "../Button/Button";

const ModalCreateTask = ({active, setActive, setDataTasks}) => {

  const [task, setTask] = useState({
    title: '',
    text: ''
  })
  console.log(task)
  const changeHandler = (event) => {
    const {name, value} = event.target
    setTask((prev) => ({...prev, [name]: value}))
  }
  const createPostNew = () => {
    setDataTasks((prev) => ([...prev, {...task}]))
    setTask({
      title: '',
      text: ''
    })
    setActive(false)
  }

  return (
    <div className={active ? 'modal-create active-modal' : 'modal-create'} onClick={() => setActive(false)}>
      <div className={active ? 'modal-create__content active-modal' : 'modal-create__content'}
           onClick={e => e.stopPropagation()}>
        <Input textLabel='Title' name='title' value={task.title} onChange={changeHandler}/>
        <Input textLabel='Text' name='text' value={task.text} onChange={changeHandler}/>
        <Button text='Create task' onClick={createPostNew}/>
      </div>
    </div>
  );
}
export default ModalCreateTask