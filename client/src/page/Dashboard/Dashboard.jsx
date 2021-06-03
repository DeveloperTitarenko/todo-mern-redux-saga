import Tasks from "../../components/Tasks/Tasks";
import {useState} from "react";
import ModalCreateTask from "../../components/Modal/Modal";


const Dashboard = () => {
  const [DataTasks, setDataTasks] = useState([])
  const [modalActive, setModalActive] = useState(false)

  return(
    <>
      <Tasks setModalActive={setModalActive} DataTasks={DataTasks}/>
      <ModalCreateTask active={modalActive} setActive={setModalActive} setDataTasks={setDataTasks}/>
    </>

  )
}
export default Dashboard