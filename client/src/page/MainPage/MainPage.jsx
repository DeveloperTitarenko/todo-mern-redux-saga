import Drawer from "../../components/Drawer/Drawer";
import './MainPage.scss'
import Search from "../../components/Search/Search";
import User from "../../components/User/User";
import {UseRoutMainPage} from "../../routes/RoutsMainPage";
import UserMenu from "../../components/UserMenu/UserMenu";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo} from "react";
import {getUser} from "../../redux/actions/user.actions";


const MainPage = () => {

  const dispatch = useDispatch()
  const routMainPage = UseRoutMainPage()
  const userAuth = useSelector(state => state.auth)
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getUser(userAuth.email))
  }, [])

  return (
    <div className='main-page'>
      <Drawer/>
      <div className='right-content'>
        <header className="header">
          <Search/>
          <div className='user-info'>
            <User userName={user.username} position={user.position} logo={user.logo}/>
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