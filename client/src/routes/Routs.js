import {Route, Switch, Redirect} from 'react-router-dom'
import MainPage from "../page/MainPage/MainPage";
import PrivateRoute from "./private.route";
import AuthPage from "../page/AuthPage/AuthPage";
export const UseRout = () => {
   return(
       <Switch>
         <Route path="/login" exact component={AuthPage}/>
         <PrivateRoute path="/" component={MainPage} exact/>
       </Switch>
     )
}

