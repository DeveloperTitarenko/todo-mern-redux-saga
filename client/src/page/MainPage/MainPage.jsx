import {useDispatch} from "react-redux";
import {logout} from "../../redux/actions/auth.actions";
import Drawer from "../../components/Drawer/Drawer";
import './MainPage.scss'
import Search from "../../components/Search/Search";
import User from "../../components/User/User";

const MainPage = () => {


  return(
    <div className='app'>
      <Drawer/>
      <div className="content">
        <header className="content__header">
          <Search/>
          <User/>
        </header>
      </div>
    </div>
  )
}
export default MainPage