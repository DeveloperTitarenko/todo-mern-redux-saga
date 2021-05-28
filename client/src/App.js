import classes from './App.module.scss';
import {useState, useEffect} from "react";
import {AuthContext} from "./context/Auth.context"
import {UseRout} from './routes/Routs'
import {useAuth} from "./hooks/aouth.hook";

function App() {
  const {login, logout, isLogin, token} = useAuth()
  const routs = UseRout()
  return (
    <AuthContext.Provider value={{login, logout, isLogin, token}}>
       <div className={classes.App}>
         {routs}
        </div>
    </AuthContext.Provider>
  );
}

export default App;
