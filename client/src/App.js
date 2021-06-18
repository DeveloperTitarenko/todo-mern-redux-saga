import './app.scss'
import {AuthContext} from "./context/Auth.context"
import {UseRout} from './routes/Routs'
import {useAuth} from "./hooks/aouth.hook";
import {useEffect} from "react";
import {getTasksState} from "./redux/actions/tasks.action";
import {useDispatch} from "react-redux";




function App() {
  const dispatch = useDispatch()
  const {login, logout, isLogin, token} = useAuth()
  const routs = UseRout()
  useEffect(() => {
    dispatch(getTasksState())
  }, [])
  return (
    <AuthContext.Provider value={{login, logout, isLogin, token}}>
       <div className='app'>
         {routs}
        </div>
    </AuthContext.Provider>
  );
}

export default App;
