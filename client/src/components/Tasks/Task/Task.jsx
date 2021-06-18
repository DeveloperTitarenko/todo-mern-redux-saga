import './task.scss'
import TaskMenu from "../../TaskMenu/TaskMenu";
import User from "../../User/User";



const Task = ({task, setModalActive, setTaskId}) => {


  return(
    <div className='task' style={{
      background: task.takeUp ? 'white' : 'rgba(214, 214, 214, 0.96)',
      boxShadow: task.takeUp ? '0px 4px 4px rgba(0, 0, 0, 0.25)': ''
    }}>

      <header>
        <div className='info'>
          <h5>{`created ${task.author}`}</h5>
          <p>{task.type}</p>
        </div>
        <TaskMenu taskId={task._id} setModalActive={setModalActive} setTaskId={setTaskId}/>
      </header>
      <h1>{task.title}</h1>
      <p>{task.text}</p>
      <div className='user' style={{height: '3rem'}}>
        {task.takeUp ? <User width={30} height={30} sizeH2='1.3rem' sizeP='1rem' userName={task.performer} logo={task.performerLogo}/> : null}
      </div>

    </div>
  )
}
export default Task