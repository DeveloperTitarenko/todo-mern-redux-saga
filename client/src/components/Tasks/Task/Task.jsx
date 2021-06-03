import './task.scss'
import TaskMenu from "../../TaskMenu/TaskMenu";
import User from "../../User/User";
import {useState} from "react";

const Task = ({task}) => {
  const [takeUp, setTakeUp] = useState(false)

  return(
    <div className='task' style={{
      background: takeUp ? 'white' : 'rgba(214, 214, 214, 0.96)',
      boxShadow: takeUp ? '0px 4px 4px rgba(0, 0, 0, 0.25)': ''
    }}>
      <TaskMenu setTakeUp={setTakeUp}/>
      <h1>{task.title}</h1>
      <p>{task.text}</p>
      <div className='user' style={{height: '3rem'}}>
        {takeUp ? <User width={30} height={30} sizeH2='1.3rem' sizeP='1rem'/> : null}
      </div>

    </div>
  )
}
export default Task