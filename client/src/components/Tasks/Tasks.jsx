
import './tasks.scss'
import CustomizeMenu from "../CustomizeMenu/CustomizeMenu";


const Tasks = ({setModalActive,  component, title, customize}) => {

  return (
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