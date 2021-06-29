import { Switch} from 'react-router-dom'
import PrivateRoute from "./private.route";
import Dashboard from "../page/Dashboard/Dashboard";
import Settings from "../page/Settings/Settings";
import Archive from '../page/Archive/Archive'
import InGear from "../page/InGear/InGear";
import Users from "../page/Users/Users";

export const UseRoutMainPage = () => {
  return(
    <Switch>
      <PrivateRoute path="/Dashboard" component={Dashboard} exact/>
      <PrivateRoute path="/Courses" component={InGear} exact/>
      <PrivateRoute path="/Materials" component={Archive} exact/>
      <PrivateRoute path="/Settings" component={Settings} exact/>
      <PrivateRoute path="/Users" component={Users} exact/>
    </Switch>
  )
}
