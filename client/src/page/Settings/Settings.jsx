import './settings.scss'

import Input from "../../components/Input/Input";
import {useEffect, useState} from "react";
import UploadAvatar from "../../components/UploadAvatar/UploadAvatar";
import Check from "../../components/Check/Check";
import {useDispatch, useSelector} from "react-redux";
import {updateUser, updateUserPassword} from "../../redux/actions/user.actions";
import {Loader} from "../../components/loader/Loader";



const Settings = () => {
  const loading = useSelector(state => state.app)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email: user.email,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    position: user.position,
    logo: user.logo,
  })
  const [formPassword, setFormPassword] = useState({
    password: '',
    newPassword: '',
    repeatNewPassword: '',
  })
  //VALIDATION-PASSWORD
  const regLowerPassword = /[a-z]/
  const regUpperCasePassword = /[A-Z]/
  const regNumbersPassword = /[0-9]/
  const regLengthPassword = /.{6,}$/

  const [validation, setValidation] = useState({
    length: false,
    upperCase: false,
    lowerCase: false,
    number: false,
    repeatPassword: false
  })

  useEffect(() => {
    setValidation(prev => ({...prev, lowerCase:  regLowerPassword.test(formPassword.newPassword)}))
    setValidation(prev => ({...prev, length:  regLengthPassword.test(formPassword.newPassword)}))
    setValidation(prev => ({...prev, number:  regNumbersPassword.test(formPassword.newPassword)}))
    setValidation(prev => ({...prev, upperCase:  regUpperCasePassword.test(formPassword.newPassword)}))
    formPassword.newPassword === formPassword.repeatNewPassword
      ? setValidation(prev => ({...prev, repeatPassword: true}))
      : setValidation(prev => ({...prev, repeatPassword: false}))

  }, [formPassword])

  const validationStatus = validation.number && validation.repeatPassword && validation.length && validation.lowerCase && validation.upperCase

//END VALIDATION PASSWORD
  const handleForm = (event) => {
    const {name, value} = event.target
    setForm((prev) => {
      return ({...prev, [name]: value})
    })
  }

  const updateUserData = () => {
    dispatch(updateUser({_id: user._id, data: form, performer: user.username}))
  }

  const handleFormPassword = (event) => {
    const {name, value} = event.target
    setFormPassword((prev) => {
      return ({...prev, [name]: value})
    })
  }

  const updatePassword = () => {
      const data = {
        password: formPassword.password,
        newPassword: formPassword.newPassword
      }
      dispatch(updateUserPassword({_id: user._id, data}))
  }

  return (
    <div className='setting'>
      <div className='setting__user'>
        <h1>Setting user</h1>
        <div className='setting__user-input'>
          <Input
            textLabel='Email' name='email' type='text' placeholder='Enter your Email'
            value={form.email} onChange={handleForm}
          />
          <Input
            textLabel='Username' name='username' type='text' placeholder='Enter your Username'
            value={form.username} onChange={handleForm}
          />
          <Input
            textLabel='First name' name='firstName' type='text' placeholder='Enter your First Name'
            value={form.firstName} onChange={handleForm}
          />
          <Input
            textLabel='Last name' name='lastName' type='text' placeholder='Enter your Last Name'
            value={form.lastName} onChange={handleForm}
          />
          <Input
            textLabel='Position' name='position' type='text' placeholder='Enter your position'
            value={form.position} onChange={handleForm}
          />
        </div>
        <UploadAvatar setForm={setForm} form={form}/>
        {loading.updateUserLoading ? <Loader/> : <button className='button-save' onClick={updateUserData}>Save</button>}
      </div>
      <div className='setting__password'>
        <h1>Setting password</h1>
        <div className='setting__password-container'>
          <div className='setting__password-input'>
            <Input
              textLabel='Password' name='password' type='password' placeholder='Password'
              value={formPassword.password} onChange={handleFormPassword}
            />
            <Input
              textLabel='New Password' name='newPassword' type='password' placeholder='New Password'
              value={formPassword.newPassword} onChange={handleFormPassword}
            />
            <Input
              textLabel='Repeat new Password' name='repeatNewPassword' type='password' placeholder='Repeat new Password'
              value={formPassword.repeatNewPassword} onChange={handleFormPassword}
            />
          </div>
          <div className='setting__password-validation'>
            <div className='setting__password-validation-wrapper'>
              <h2>Password must contain</h2>
              <ul>
                <li><Check check={validation.length}/>8+ characters</li>
                <li><Check check={validation.lowerCase}/>lower-case</li>
                <li><Check check={validation.upperCase}/>upper-case</li>
                <li><Check check={validation.number}/>numbers</li>
                <li><Check check={validation.repeatPassword}/>repeat password</li>
              </ul>
            </div>
          </div>
        </div>
        {
          loading.updateUserPasswordLoading
            ? <Loader/>
            : <button className='button-save' disabled={!validationStatus}
                      onClick={updatePassword}
            >Save
            </button>
        }
      </div>
    </div>
  )
}
export default Settings