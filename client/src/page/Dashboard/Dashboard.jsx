import Tasks from "../../components/Tasks/Tasks";
import {useState} from "react";
import ModalCreateTask from "../../components/Modal/Modal";
import Task from "../../components/Tasks/Task/Task";
import {useSelector} from "react-redux";


const Dashboard = () => {
  const [modalActive, setModalActive] = useState(false)
  const [taskId, setTaskId] = useState(null)
  const tasks = useSelector((state) => state.tasks)
  const TasksAll = () => {
    return(
      tasks.map((task, index) => {
        if(!task.finished){
          return (
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
      <Tasks setModalActive={setModalActive} setTaskId={setTaskId} component={TasksAll} title='Tasks' customize={true}/>
      <ModalCreateTask modalActive={modalActive} setModalActive={setModalActive} taskId={taskId} setTaskId={setTaskId}/>
    </>

  )
}
export default Dashboard