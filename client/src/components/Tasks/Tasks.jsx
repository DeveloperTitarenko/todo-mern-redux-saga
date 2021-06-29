
import './tasks.scss'
import CustomizeMenu from "../CustomizeMenu/CustomizeMenu";
import {useSelector} from "react-redux";
import LoaderCircle from "../LoaderCircle/LoaderCircle";


const Tasks = ({setModalActive,  component, title, customize}) => {
const taskLoading = useSelector(state => state.app.tasksLoading)
  return (
    taskLoading ? <LoaderCircle/> :
    <div className='tasks'>
      <header>
        <h1>{title}</h1>
        {customize ? <CustomizeMenu setModalActive={setModalActive}/> : null}
      </header>
      <div className='tasks__content'>
        {component()}
      </div>
    </div>

  )
}
export default Tasks