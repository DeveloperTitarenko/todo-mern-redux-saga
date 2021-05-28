import {useCallback, useEffect, useState} from "react";


export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [isLogin, setIsLogin] = useState(null)

  const login = useCallback((jwtToken) => {
    setToken(jwtToken)
    localStorage.setItem('token', jwtToken)
  }, [])

  const logout = () => {
    setToken(null)
    setIsLogin(null)
    localStorage.removeItem('token')
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token){
      login(token)
      setIsLogin(true)
    }
  }, [login])

  return {login, logout, token, isLogin}
}