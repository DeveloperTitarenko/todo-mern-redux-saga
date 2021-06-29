import {combineReducers} from "redux";
import {authReducer} from "./auth.reducer";
import {connectRouter} from 'connected-react-router'
import {appReducer} from "./app.reducer";
import {tasksReducer} from "./tasks.reducer";
import {userReducer} from "./user.reducer";
import {usersReducer} from "./users.reducer";


export const rootReducer = (history) =>  combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  app: appReducer,
  tasks: tasksReducer,
  user: userReducer,
  users: usersReducer
})

