import {useDispatch} from "react-redux";
import {logout} from "../../redux/actions/auth.actions";

const MainPage = () => {
  const dispatch = useDispatch()

  const logoutV = async () => {
    await dispatch(logout())
  }

  return(
    <div>
      <h1>Main Page</h1>
      <button onClick={logoutV}>Logout</button>
    </div>
  )
}
export default MainPage