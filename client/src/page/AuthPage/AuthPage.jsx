import { useEffect, useState} from 'react'
import './AuthPage.scss'
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {login, registration} from "../../redux/actions/auth.actions";
import {useDispatch, useSelector} from "react-redux";
import {Loader} from "../../components/loader/Loader";
import {Error} from "../../components/error/Error";



const AuthPage = () => {
  const [isLogIn, setIsLogIn] = useState(true)
  const [eventName, setEventName] = useState()
  const [form, setForm] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  })

  const [validation, setValidation] = useState({
    validationEmail: false,
    validationPassword: false,
    repeatPassword: false
  })
  const loader = useSelector(state => state.app.loading)
  const error = useSelector(state => state.app.error)
  const dispatch = useDispatch()

  const registerHandler = () => {
    if (validation.validationEmail && validation.validationPassword && validation.repeatPassword) {
      dispatch(registration({...form}))
    }
  }

  const logIn = () => {
    dispatch(login({...form}))
  }


  useEffect(() => {
    const regEmail = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i
    const regPassword = /^[A-Z0-9_-]{4,12}$/i

    switch (eventName) {
      case 'email' :
        return regEmail.test(form.email) ? setValidation((prevState) => ({
          ...prevState,
          validationEmail: true
        })) : setValidation((prevState) => ({
          ...prevState,
          validationEmail: false
        }))
      case 'password' :
        return regPassword.test(form.password) ? setValidation((prevState) => ({
          ...prevState,
          validationPassword: true
        })) : setValidation((prevState) => ({
          ...prevState,
          validationPassword: false
        }))
      case'repeatPassword':
        return form.password === form.repeatPassword
          ? setValidation((prevState) => ({
            ...prevState,
            repeatPassword: true
          }))
          : setValidation((prevState) => ({
            ...prevState,
            repeatPassword: false
          }))
    }
  }, [form])

  const changeHandler = (event) => {
    const {name, value} = event.target
    setForm((prevState) => ({...prevState, [name]: value}))
    setEventName(name)
  }

  return (
    <>
      {error ? <Error text={error}/> : null}
      <div className='wrapper'>
        <div className='Auth'>
          <div className="Auth__exit">
            <i className="fas fa-times Auth__exit-icon"/>
          </div>

          <h1>{isLogIn ? 'Log In' : 'Registration'}</h1>
          {isLogIn ? <p>Log in with your data that you enetered during your registration.</p> : null}
          <Input
            textLabel='Your email'
            name='email'
            type='text'
            placeholder='Enter your email'
            value={form.email}
            onChange={changeHandler}
            style={validation.validationEmail ? {outlineColor: 'green'} : {outlineColor: 'red'}}
          />
            <Input
              textLabel='Password'
              name='password'
              type='password'
              placeholder='Password'
              value={form.password}
              onChange={changeHandler}
              style={validation.validationPassword ? {outlineColor: 'green'} : {outlineColor: 'red'}}
            />

          {!isLogIn ? <Input
            textLabel='Repeat Password'
            name='repeatPassword'
            type='password'
            placeholder='Repeat password'
            value={form.repeatPassword}
            onChange={changeHandler}
            style={validation.repeatPassword ? {outlineColor: 'green'} : {outlineColor: 'red'}}
          /> : null}

          {loader ? <Loader/> : <Button text={isLogIn ? 'Log In' : 'Registration'}
                                        onClick={isLogIn ? logIn : registerHandler}
          />}

          <div className="Auth__line">
          </div>
          <div className='Auth__signUp'>
            {isLogIn ? 'Don’t have an account? ' : 'Have an account? '}
            <span className='Auth__signUp-forgot'
                  onClick={() => setIsLogIn(!isLogIn)}
            >
          {isLogIn ? 'Sign Up ' : 'Sign In '}
          </span>
          </div>
        </div>
      </div>
    </>
  )
}
export default AuthPage


