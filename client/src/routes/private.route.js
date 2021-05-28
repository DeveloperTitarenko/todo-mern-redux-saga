import React from "react";
import { Route, Redirect } from  "react-router-dom";

import {useSelector} from "react-redux";

const  PrivateRoute = (props) => {
  const isLogin = useSelector(state => state.auth.isAuth)
  console.log(isLogin)

  return  isLogin ? (<Route  path={props.path}  exact={props.exact} component={props.component} />) :
    (<Redirect  to="/login"  />);
};
export  default  PrivateRoute;