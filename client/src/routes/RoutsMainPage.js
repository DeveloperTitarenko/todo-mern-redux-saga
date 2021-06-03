import { Switch} from 'react-router-dom'
import PrivateRoute from "./private.route";
import Dashboard from "../page/Dashboard/Dashboard";
import Courses from "../page/Courses/Courses";
import Materials from "../page/Materials/Materials";
import Settings from "../page/Settings/Settings";

export const UseRoutMainPage = () => {
  return(
    <Switch>
      <PrivateRoute path="/Dashboard" component={Dashboard} exact/>
      <PrivateRoute path="/Courses" component={Courses} exact/>
      <PrivateRoute path="/Materials" component={Materials} exact/>
      <PrivateRoute path="/Settings" component={Settings} exact/>
    </Switch>
  )
}
