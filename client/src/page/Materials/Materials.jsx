import {useSelector} from "react-redux";
import {useState} from "react";
import Tasks from "../../components/Tasks/Tasks";
import ModalCreateTask from "../../components/Modal/Modal";
import Task from "../../components/Tasks/Task/Task";

const Materials = () => {
  const tasks = useSelector(state => state.tasks)
  const [modalActive, setModalActive] = useState(false)
  const [taskId, setTaskId] = useState(null)

  const FinishedTasks = () => {
    return (
      tasks.map((task, index) => {
        if (task.finished) {
          return (
            <div key={index}>
              <Task task={task} setModalActive={setModalActive} setTaskId={setTaskId}/>
            </div>
          )
        }
      })
    )
  }
  return (
    <>
      <Tasks setModalActive={setModalActive} setTaskId={setTaskId} component={FinishedTasks} title='Archive' customize={false}/>
      <ModalCreateTask modalActive={modalActive} setModalActive={setModalActive} taskId={taskId} setTaskId={setTaskId}/>
    </>
  )
}
export default Materials