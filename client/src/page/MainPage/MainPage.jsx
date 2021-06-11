
import Drawer from "../../components/Drawer/Drawer";
import './MainPage.scss'
import Search from "../../components/Search/Search";
import User from "../../components/User/User";
import {UseRoutMainPage} from "../../routes/RoutsMainPage";
import UserMenu from "../../components/UserMenu/UserMenu";
import {useSelector} from "react-redux";


const MainPage = () => {
const routMainPage = UseRoutMainPage()
const user = useSelector(state => state.auth)
  return(
    <div className='main-page'>
      <Drawer/>
      <div className='right-content'>
        <header className="header">
          <Search/>
          <div className='user-info'>
            <User user={user.username}/>
            <UserMenu/>
          </div>
        </header>
        <div className="content">
            {routMainPage}
        </div>
      </div>
    </div>
  )
}
export default MainPage