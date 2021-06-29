import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Tasks from "../../components/Tasks/Tasks";
import ModalCreateTask from "../../components/Modal/Modal";
import Task from "../../components/Tasks/Task/Task";

const InGear = () => {
  useEffect(() => {

  },[])
  const search = useSelector(state => state.app.search)
  const tasks = useSelector(state => state.tasks)
  const user = useSelector(state => state.user)
  const [modalActive, setModalActive] = useState(false)
  const [taskId, setTaskId] = useState(null)

  const filterTasks = tasks.filter(task => {
    return task.title.toLowerCase().includes(search.toLowerCase())
  })
  const InGearTasks = () => {
    return(
      filterTasks.map((task, index) => {
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