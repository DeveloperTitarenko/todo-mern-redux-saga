import Task from "./Task/Task";
import './tasks.scss'
import CustomizeMenu from "../CustomizeMenu/CustomizeMenu";

const Tasks = ({setModalActive, DataTasks}) => {


  console.log(DataTasks)

  return (
    <div className='tasks'>
      <header>
        <h1>Tasks</h1>
        <CustomizeMenu setModalActive={setModalActive}/>
      </header>
      <div className='tasks__content'>
        {
          DataTasks.map((task, index) => {
            console.log(index)
            return (
              <div key={index}>
                <Task task={task}/>
              </div>
            )
          })
        }

      </div>

    </div>

  )
}
export default Tasks