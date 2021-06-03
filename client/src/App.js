import './app.scss'
import {AuthContext} from "./context/Auth.context"
import {UseRout} from './routes/Routs'
import {useAuth} from "./hooks/aouth.hook";
import {BrowserRouter} from "react-router-dom";

function App() {
  const {login, logout, isLogin, token} = useAuth()
  const routs = UseRout()
  return (
    <AuthContext.Provider value={{login, logout, isLogin, token}}>
       <div className='app'>
         {routs}
        </div>
    </AuthContext.Provider>
  );
}

export default App;
