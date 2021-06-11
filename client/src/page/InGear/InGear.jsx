import {useSelector} from "react-redux";
import {useState} from "react";
import Tasks from "../../components/Tasks/Tasks";
import ModalCreateTask from "../../components/Modal/Modal";
import Task from "../../components/Tasks/Task/Task";

const InGear = () => {
  const tasks = useSelector(state => state.tasks)
  const user = useSelector(state => state.auth)
  const [modalActive, setModalActive] = useState(false)
  const [taskId, setTaskId] = useState(null)

  const InGearTasks = () => {
    return(
      tasks.map((task, index) => {
        if(task.performer === user.username && task.takeUp && !task.finished) {
          return(
            <div key={index}>
              <Task task={task} setModalActive={setModalActive} setTaskId={setTaskId}/>
            </div>
          )
        }
      })
    )
  }
  return(
    <>
      <Tasks setModalActive={setModalActive} setTaskId={setTaskId} component={InGearTasks} title='In gear' customize={false}/>
      <ModalCreateTask modalActive={modalActive} setModalActive={setModalActive} taskId={taskId} setTaskId={setTaskId}/>
    </>
  )
}
export default InGear